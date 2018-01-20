import React, { Component } from 'react';
import { connect } from 'react-redux';
import { init, dispose } from 'echarts/src/echarts';
import 'echarts/src/chart/pie';
import 'echarts/src/component/legend';
import 'echarts/src/component/tooltip';
import 'echarts/src/component/title';

class Dashboard extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        this.initChart();
        this.updateChart();
    }
    componentWillReceiveProps() {
        this.updateChart();
    }
    componentWillUnmount() {
        dispose(this.pie);
    }
    initChart() {
        const container = document.getElementById('chartContainer');
        this.pie = init(container);
        this.pie.setOption({
            title: {
                text: '»ã×ÜÐÅÏ¢',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                x: 'right',
                data: ['hero', 'crisis', 'message']
            },
            series: {
                type: 'pie',
                radius: ['30%', '50%'],
                label: {
                    normal: {
                        show: true,
                        position: 'outside'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: true
                    }
                },
                data: []
            }
        });
    }
    updateChart() {
        const { heroNumber, crisisNumber, messageNumber } = this.props;
        const data = [{
            name: 'hero',
            value: heroNumber
        }, {
            name: 'crisis',
            value: crisisNumber
        }, {
            name: 'message',
            value: messageNumber
        }];
        this.pie.setOption({
            series: {
                data: data
            }
        });
    }
    render() {
        return (<div>
	        	<p>Dashboard</p>
				<div id="chartContainer"></div>
        	</div>);
    }
}
const mapStateToProps = (state, ownProps) => ({
    heroNumber: state.heroes.length,
    crisisNumber: state.crisisLibary.length,
    messageNumber: state.msgs.length
});
export default connect(mapStateToProps)(Dashboard);