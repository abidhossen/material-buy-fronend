import React, { Component } from 'react';
import { Card, CardBody, Row, Col } from "reactstrap";

//Import Charts
import ReactApexChart from 'react-apexcharts';
import "./dashboard.scss";

class CategoryGraph extends Component {
    state = {
        series: [ 43, 23, 16, 12, 4, 2],
        options : {
            labels: ["Building Materials", "Roofing", "Tiles","Wooden", "Plywood", "Cardboard"],
            plotOptions: {
                pie: {
                    donut: {
                        size: '50%'
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false,
            },
            colors: ['#f54748', '#fb9300', '#ac66cc', '#39a6a3', '#cc9b6d', '#064420'],
        
        }
    }
    render() {
        return (
            <React.Fragment>
                                <Card>
                                    <CardBody>
                                        <div className="float-right">
                                            <select className="custom-select custom-select-sm">
                                                <option defaultValue>Apr</option>
                                                <option value="1">Mar</option>
                                                <option value="2">Feb</option>
                                                <option value="3">Jan</option>
                                            </select>
                                        </div>
                                        <h4 className="card-title mb-4">Product Category</h4>

                                        <div id="donut-chart" className="apex-charts">
                                        <ReactApexChart options={this.state.options} series={this.state.series} type="donut" height="270" />
                                        </div>

                                        <Row>
                                            <Col xs={2}>
                                                <div className="text-center mt-4">
                                                    <p className="mb-2 text-truncate"><i style={{color:"#f54748"}} className="mdi mdi-circle  font-size-10 mr-1"></i> Building Materials</p>
                                                    <h5>43 %</h5>
                                                </div>
                                            </Col>
                                            <Col xs={2}>
                                                <div className="text-center mt-4">
                                                    <p className="mb-2 text-truncate"><i style={{color:"#fb9300"}} className="mdi mdi-circle  font-size-10 mr-1"></i> Roofing</p>
                                                    <h5>23 %</h5>
                                                </div>
                                            </Col>
                                            <Col xs={2}>
                                                <div className="text-center mt-4">
                                                    <p className="mb-2 text-truncate"><i style={{color:"#ac66cc"}} className="mdi mdi-circle  font-size-10 mr-1"></i> Tiles</p>
                                                    <h5>16 %</h5>
                                                </div>
                                            </Col>
                                            <Col xs={2}>
                                                <div className="text-center mt-4">
                                                    <p className="mb-2 text-truncate"><i style={{color:"#39a6a3"}} className="mdi mdi-circle  font-size-10 mr-1"></i> Wooden</p>
                                                    <h5>12 %</h5>
                                                </div>
                                            </Col>
                                            <Col xs={2}>
                                                <div className="text-center mt-4">
                                                    <p className="mb-2 text-truncate"><i style={{color:"#cc9b6d"}} className="mdi mdi-circle  font-size-10 mr-1"></i> Plywood</p>
                                                    <h5>4 %</h5>
                                                </div>
                                            </Col>
                                            <Col xs={2}>
                                                <div className="text-center mt-4">
                                                    <p className="mb-2 text-truncate"><i style={{color:"#064420"}} className="mdi mdi-circle  font-size-10 mr-1"></i> Cardboard</p>
                                                    <h5>2 %</h5>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
            </React.Fragment>
        );
    }
}

export default CategoryGraph;