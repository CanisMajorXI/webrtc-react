import React from 'react'

class Test1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = { audioInputDevices: []}
    }
    componentDidMount() {
        // this.init()
        // console.log('mount')
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log('update')
    }

    // async init() {
    //     const devices = await navigator.mediaDevices.enumerateDevices()
    //     // console.log(devices)
    //     this.setState(prevState => { audioInputDevices: devices.filter(e => e.kind === 'audioinput'),
    //     selectedDevice: devices})
    //     console.log(this.state)
    // }
    render() {
        return <>
            {/*<select onChange={e => {}>*/}
            {/*    {this.state.audioInputDevices*/}
            {/*    .map((e, index) => <option key={ index } value={ index }>{ e.kind }</option>)}*/}
            {/*</select>*/}
        </>
    }
}

export default Test1
