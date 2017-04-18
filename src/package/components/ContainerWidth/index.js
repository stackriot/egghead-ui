import React, {PropTypes, Component} from 'react'
import elementResizeEvent from 'element-resize-event'
import {
  mediumContainerWidth,
  largeContainerWidth,
  xlargeContainerWidth,
} from 'utils/hardCodedSizes'

export default class DeviceWidth extends Component {
  
  state = {
    containerWidth: 'small',
  }

  componentDidMount = () => {
    this.handleWidthChange()
    window.onresize = this.handleWidthChange
    elementResizeEvent(this.refs.container, this.handleWidthChange)
  }

  componentWillUnmount = () => {
    elementResizeEvent(this.refs.container, null)
  }

  handleWidthChange = () => {
    const {onWidthChange} = this.props
    if(onWidthChange) {
      onWidthChange()
    }
    const containerExactWidth = this.refs.container.clientWidth
    if(containerExactWidth >= xlargeContainerWidth) {
      this.setState({
        containerWidth: 'xlarge',
      })
    }
    else if(containerExactWidth >= largeContainerWidth) {
      this.setState({
        containerWidth: 'large',
      })
    }
    else if (containerExactWidth >= mediumContainerWidth) {
      this.setState({
        containerWidth: 'medium',
      })
    }
    else {
      this.setState({
        containerWidth: 'small',
      })
    }
  }

  render() {
    const {containerWidth} = this.state
    const {children} = this.props
    return (
      <div ref='container'>
        {children(containerWidth)}
      </div>
    )
  }
}

DeviceWidth.propTypes = {
  children: PropTypes.func.isRequired,
  onWidthChange: PropTypes.func,
}
