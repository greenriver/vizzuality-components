import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from 'components/icon';
import Tooltip from 'components/tooltip';
import LegendOpacityTooltip from './legend-item-button-opacity-tooltip';
import styles from '../styles-button.scss';

class LegendItemButtonOpacity extends PureComponent {
  static propTypes = {
    layers: PropTypes.array,
    activeLayer: PropTypes.object,
    visibility: PropTypes.bool,
    tooltipOpened: PropTypes.bool,
    icon: PropTypes.string,
    className: PropTypes.string,
    focusStyle: PropTypes.object,
    defaultStyle: PropTypes.object,
    enabledStyle: PropTypes.object,
    disabledStyle: PropTypes.object,
    tooltipText: PropTypes.string,
    scrolling: PropTypes.bool,

    onChangeOpacity: PropTypes.func,
    onTooltipVisibilityChange: PropTypes.func
  }

  static defaultProps = {
    layers: [],
    activeLayer: {},
    visibility: true,
    icon: '',
    className: '',
    focusStyle: {},
    defaultStyle: {},
    enabledStyle: {},
    disabledStyle: {},
    tooltipOpened: false,
    tooltipText: '',
    scrolling: false,

    onChangeOpacity: () => {},
    onTooltipVisibilityChange: () => {}
  }

  state = {
    visibilityHover: false,
    visibilityClick: false
  }

  componentWillReceiveProps(nextProps) {
    const { scrolling } = nextProps;
    
    if (scrolling) {
      this.onTooltipVisibilityChange(false);
    }
  }

  onTooltipVisibilityChange = (visibility) => {
    const { onTooltipVisibilityChange } = this.props;
    
    this.setState({
      visibilityHover: false,
      visibilityClick: visibility
    });

    onTooltipVisibilityChange(visibility);
  }

  render() {
    const {
      layers,
      visibility,
      activeLayer,
      tooltipOpened,
      icon,
      className,
      enabledStyle,
      defaultStyle,
      disabledStyle,
      focusStyle,
      tooltipText,
      scrolling,
      ...rest
    } = this.props;

    const { visibilityClick, visibilityHover } = this.state;
    const { opacity } = activeLayer;
    let iconStyle = visibility ? defaultStyle : disabledStyle;
    if (visibility && (visibilityHover || visibilityClick)) {
      iconStyle = focusStyle;
    }
    if (visibility && opacity < 1) iconStyle = enabledStyle;

    return (
      <Tooltip
        overlay={
          visibility && (
          <LegendOpacityTooltip
            layers={layers}
            activeLayer={activeLayer}
            onChangeOpacity={this.props.onChangeOpacity}
            {...rest}
          />
        )}
        visible={visibility && visibilityClick}
        overlayClassName={`c-rc-tooltip ${classnames({ '-default': visibility })} ${className || ''}`}
        placement="top"
        trigger={['click']}
        onVisibleChange={this.onTooltipVisibilityChange}
        destroyTooltipOnHide
      >
        <Tooltip
          visible={visibilityHover && !visibilityClick && visibility}
          overlay={tooltipText || (`Opacity ${opacity ? `(${Math.round(opacity * 100)}%)` : ''}`)}
          overlayClassName="c-rc-tooltip -default"
          placement="top"
          trigger={tooltipOpened ? '' : 'hover'}
          onVisibleChange={v => this.setState({ visibilityHover: v })}
          destroyTooltipOnHide
          style={styles.tooltip}
        >
          <button
            type="button"
            styleName={`c-legend-button opacity ${classnames({ '-disabled': !visibility })}`}
            aria-label="Change opacity"
          >
            <Icon name={icon || 'icon-opacity'} className="-small" style={iconStyle} />
          </button>
        </Tooltip>

      </Tooltip>
    );
  }
}

export default LegendItemButtonOpacity;
