import React from 'react';
import content from '../../content';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import { ViewHeader, ViewContainer, Image } from '../../components';
import Modal from 'react-bootstrap/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarBattery, faEye, faDharmachakra, faVrCardboard, faBolt, faWaveSquare, faCogs, faTools, faRocket } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

export default class Projects extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            popupContent: 
            {
                "image": "electrical.jpg",
                "header": "You shouldn't be able to see me.",
                "body": "",
                "bodyFull": "",
                "carousel": 
                {
                   "images": [],
                   "caption": ""
                },
            },
        }
    }

    editAndShowPopup = (props) => {
        this.setState({
            showPopup: true,
            popupContent: props
        });
    }

    hidePopup = () => {
        this.setState({
            showPopup: false
        });
    }
    render() {

        // For Popup content
        const RenderHTML=(content)=>{
            return(
            <div dangerouslySetInnerHTML={ {__html: content} } />
            )
        }

        const projectIcons = {
            software: [
                faEye, // Computer Vision
                faDharmachakra, // Controls
                faVrCardboard, // Simulations
            ],
            electrical: [
                faBolt, 
                faWaveSquare, // signals
                faCarBattery, // power
            ],
            mechanical: [
                faCogs, 
                faTools,
                faRocket,
            ]
        }

        const ProjectDetailButtonList = (list, team) => {
            const proj_list = list.map((proj, index) => {
                return <button className="ProjectDetailButton" onClick={()=>this.editAndShowPopup(proj)}>
                    <div className="ProjectButtonInnerIcon">
                    <FontAwesomeIcon className="ProjectIconSmall" icon={projectIcons[team][index]} size="lg" />
                    </div>
                    <div className="ProjectButtonInnerText">{proj.header}</div>
                    </button>
            })
            return(
                <div className="ProjectDetailButtonList">
                    {proj_list}
                </div>
            )
        }

        return (
            <ViewContainer>
                <ViewHeader title={content.projects.title} blurb={content.projects.blurb} disableImage={true}/>
                <Row>
                    <Col sm={1}>
                    </Col>
                    <Col>
                        <h4 className="VideoHeader">
                            {content.projects.project.header}
                        </h4>
                        <hr/>
                        <Row>
                            <Col sm={6}>
                                <div className="VideoBody">
                                  {content.projects.project.body}
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="ProjectImageContainer">
                                <iframe height="400" width="100%"src="https://www.youtube.com/embed/Oo7kQUQVeRs "> </iframe>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={1}>
                    </Col>
                </Row>
                <div className="ContentSeperatorTop"/>
                    <div className="ContentContainer">
                        <Row>
                            <Col sm={1}>
                            </Col>
                            <Col>
                                <h4 className="ProjectSubheader">
                                    {content.projects.project.software.header}
                                </h4>
                                <hr/>
                                <Row>
                                    <Col sm={6}>
                                        <div className="CarouselContainerDark">
                                            <Row>
                                                <Col>
                                                    <Carousel className="ProjectsCarousel" fade="true">
                                                        {content.projects.project.carousels.software.images.map((item, index) => (
                                                            <Carousel.Item key={index}>
                                                                <div className="ProjectsImageContainer">
                                                                    <Image src={item} folder="images" />
                                                                </div>
                                                            </Carousel.Item>
                                                        ))}
                                                    </Carousel>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="ProjectBody">{content.projects.project.software.body}</div>
                                        {ProjectDetailButtonList(content.projects.project.software.detail, 'software')}
                                    </Col>
                                </Row>
                                <h4 className="ProjectSubheader">
                                    {content.projects.project.electrical.header}
                                </h4>
                                <hr/>
                                <Row>
                                    <Col sm={6}>
                                        <div className="CarouselContainerDark">
                                            <Row>
                                                <Col>
                                                    <Carousel className="ProjectsCarousel" fade="true">
                                                        {content.projects.project.carousels.electrical.images.map((item, index) => (
                                                            <Carousel.Item key={index}>
                                                                <div className="ProjectsImageContainer">
                                                                    <Image src={item} folder="images" />
                                                                </div>
                                                            </Carousel.Item>
                                                        ))}
                                                    </Carousel>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="ProjectBody">{content.projects.project.electrical.body}</div>
                                        {ProjectDetailButtonList(content.projects.project.electrical.detail, 'electrical')}
                                    </Col>
                                </Row>
                                <h4 className="ProjectSubheader">
                                    {content.projects.project.mechanical.header}
                                </h4>
                                <hr/>
                                <Row>
                                    <Col sm={6}>
                                        <div className="CarouselContainerDark">
                                            <Row>
                                                <Col>
                                                    <Carousel className="ProjectsCarousel" fade="true">
                                                        {content.projects.project.carousels.mechanical.images.map((item, index) => (
                                                            <Carousel.Item key={index}>
                                                                <div className="ProjectsImageContainer">
                                                                    <Image src={item} folder="images" />
                                                                </div>
                                                            </Carousel.Item>
                                                        ))}
                                                    </Carousel>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="ProjectBody">{content.projects.project.mechanical.body}</div>
                                        {ProjectDetailButtonList(content.projects.project.mechanical.detail, 'mechanical')}
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={1}>
                            </Col>
                        </Row>
                    </div>
                <Modal
                    className="ProjectDetailModal"
                    show={this.state.showPopup}
                    onHide={this.hidePopup}
                    onEscapeKeyDown={this.hidePopup}
                    shouldcloseonoverlayclick="true"
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {this.state.popupContent.header}
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="ProjectDetailModalBody">
                        <Row>
                            <Col sm={12}>
                                <div className="ProjectDetailCarouselContainer">
                                    <Carousel className="ProjectDetailCarousel" fade="true">
                                        {this.state.popupContent.carousel.images.map((item, index) => (                                    
                                            <Carousel.Item key={index}>
                                                <div className="ProjectDetailCarouselImageContainer">
                                                    <Image src={item} folder="images" />
                                                </div>
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                    <h4 className="ProjectDetailCarouselImageCaption">
                                        {this.state.popupContent.carousel.caption}
                                    </h4>
                                </div>
                            </Col>
                        </Row>
                        <div>
                            {RenderHTML(this.state.popupContent.bodyFull)}
                        </div>
                    </Modal.Body>
                </Modal>
            </ViewContainer>

        )
    }
}
