import React, { createRef } from 'react'

class LottieAnimation extends React.Component {
  constructor(props) {
    super(props);

    this.containerRef = createRef()
  }

  componentDidMount() {
    const containerEl = this.containerRef.current;

    const { name, loop } = this.props;

    window.bodymovin.loadAnimation({
      wrapper: containerEl,
      renderer: 'svg',
      loop: loop || true,
      autoPlay: true,
      path: `/assets/lotties/${name}.json`
    })
  }

  render() {
    const { containerClassName } = this.props;
    return (
      <div
        className={containerClassName}
        ref={this.containerRef}
      />
    );
  }
}

export default LottieAnimation
