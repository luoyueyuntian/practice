import React, { Component } from 'react';
import { connect } from 'react-redux';
import { init, dispose } from 'echarts/src/echarts';
import 'echarts/src/chart/pie';
import 'echarts/src/component/legend';
import 'echarts/src/component/tooltip';
import 'echarts/src/component/title';

class Dashboard extends Component {
    componentDidMount() {
        this._initChart();
    }
    componentWillReceiveProps() {
        this._updateChart();
    }
    componentWillUnmount() {
        dispose(this.pie);
    }
    _initChart() {
        const container = document.getElementById('chartContainer');
        this.pie = init(container);
        this.pie.setOption({
            title: {
                text: '汇总信息',
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
                data: this._getChartData()
            }
        });
    }
    _getChartData() {
        const { heroNumber, crisisNumber, messageNumber } = this.props;
        return [{
            name: 'hero',
            value: heroNumber
        }, {
            name: 'crisis',
            value: crisisNumber
        }, {
            name: 'message',
            value: messageNumber
        }];

    }
    _updateChart() {
        this.pie.setOption({
            series: {
                data: this._getChartData()
            }
        });
    }
    render() {
        return (
            <div>
                <p>Dashboard</p>
                <div id="chartContainer"></div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => ({
    heroNumber: state.heroes.length,
    crisisNumber: state.crisisLibary.length,
    messageNumber: state.msgs.length
});
export default connect(mapStateToProps)(Dashboard);