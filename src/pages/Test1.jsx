import React from 'react'

class Test1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = { audioInputDevices: []}
    }
    componentDidMount() {
        this.init()
        console.log('mount')
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('update')
        this.setMedia()

    }

    async init() {
        const devices = (await navigator.mediaDevices.enumerateDevices())
        this.setState(prevState => ({ audioInputDevices: devices, selectedDeviceIndex: devices.length > 1 ? 0 : null }))
    }
    async setMedia() {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: this.state.audioInputDevices[this.state.selectedDeviceIndex] })
        // this.audio.srcObject = stream
        this.video.srcObject = stream
    }
    render() {
        return <>
            <div><video autoPlay width={400} height={300} ref={instance => { this.video = instance }}/></div>
            {/*<div><audio controls ref={instance => { this.audio = instance }}/></div>*/}
            <select onChange={e =>
            {this.setState({selectedDeviceIndex: e.target.value})}}>
                {this.state.audioInputDevices
                .map((e, index) => <option key={ index } value={ index }>{ e.kind }</option>)}
            </select>
        </>
    }
}

export default Test1
