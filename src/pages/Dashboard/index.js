import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Components
import MiniWidgets from "./MiniWidgets";
import RevenueAnalytics from "./RevenueAnalytics";
import SalesAnalytics from "./SalesAnalytics";
import EarningReports from "./EarningReports";
import Sources from "./Sources";
import RecentlyActivity from "./RecentlyActivity";
import RevenueByLocations from "./RevenueByLocations";
import ChatBox from "./ChatBox";
import LatestTransactions from "./LatestTransactions";
import CategoryGraph from "./CategoryGraph";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Material Buy", link : "#" },
                { title : "Dashboard", link : "#" },
            ],
            reports : [
                { icon : "ri-user-line", title : "Customers", value : "1072", rate : "10%", desc : "From previous period" },
                { icon : "ri-store-2-line", title : "Vendors", value : "452", rate : "5%", desc : "From previous period" },
                { icon : "ri-stack-fill", title : "Products", value : "12146", rate : "30%", desc : "From previous period" },
                { icon : "ri-money-dollar-circle-line", title : "Revenue", value : "$ 3315.4", rate : "8%", desc : "From previous period" }
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Dashboard" breadcrumbItems={this.state.breadcrumbItems} />
                        <Row>
                            <Col xl={12}>
                                <Row>
                                    <MiniWidgets reports={this.state.reports} />
                                </Row>
                            </Col>
                            {/* <Col xl={8}>
                                Revenue Analytics
                                <RevenueAnalytics/>
                            </Col>
                            <Col xl={4}>

                                Sales Analytics
                                <SalesAnalytics/>

                                earning reports
                                <EarningReports/>

                            </Col> */}
                            
                           
                        </Row>
                        <Row>
                           
                           <Col xl={8}>
                                {/* Revenue Analytics */}
                                <RevenueAnalytics/>
                            </Col>
                            <Col xl={4}>

                            {/* Sales Analytics */}
                                <SalesAnalytics/>

                                {/* earning reports
                                <EarningReports/> */}

                            </Col>
                          


                        </Row>

                        <Row>
                            <Col xl={7}>
                            <CategoryGraph></CategoryGraph>
                            </Col>
                        
                            {/* sources */}
                            {/* <Sources/> */}

                            {/* recent activity */}
                            {/* <RecentlyActivity/> */}

                            {/* revenue by locations */}
                            <Col xl={5}>
                                <RevenueByLocations/>
                            </Col>
                        </Row>
                        <Row>
                            <LatestTransactions/>
                            {/* chat box */}
                            {/* <ChatBox/> */}
                            {/* latest transactions */}
                        </Row>
                    </Container> 
                </div>
            </React.Fragment>
        );
    }
}

export default Dashboard;
