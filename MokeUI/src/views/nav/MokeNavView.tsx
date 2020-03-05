import React from 'react';
import {
    Col,
    Row,
    Button,
    InputGroup,
    FormControl,
    ButtonGroup,
    ListGroup,
    Breadcrumb,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LoginModal } from './loginmodal';
import './index.scss';
import { RegisterModal } from './registermodal';

interface IMokeNavOwnProps {
    history: any;
}

interface IMokeNavMapStateToProps {
    username: string;
    uid?: number;
};

interface IMokeNavMapDispatchToProps {
    logout: () => void;
};

type IMokeNavProps = IMokeNavOwnProps & IMokeNavMapStateToProps & IMokeNavMapDispatchToProps;

interface IMokeNavSate {
    isOpenLoginModal: boolean;
    isOpenRegisterModal: boolean;
    isActive: variant[];
}

type variant = undefined
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'dark'
    | 'light';

export class MokeNavView extends React.Component<IMokeNavProps, IMokeNavSate>{
    constructor(props: IMokeNavProps) {
        super(props);
        this.state = {
            isOpenLoginModal: false,
            isOpenRegisterModal: false,
            isActive: [undefined, undefined, undefined, undefined, undefined]
        }
    }

    public render(): JSX.Element {
        return (
            <React.Fragment>
                <Row>
                    <Col>
                        <Link
                            to="/home"
                            className="nav-link moke-homepage-nav-headerLink">
                            <h2>墨客</h2>
                        </Link>
                    </Col>
                    <Col className="">
                        <ButtonGroup className="float-right">
                            {
                                this.props.uid
                                    ? this.renderUserButtonGroup()
                                    : this.renderLoginAndRegisterButtonGroup()
                            }
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <InputGroup>
                            <FormControl
                                placeholder="Username"
                                aria-label="Username"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary">搜索</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Breadcrumb className={"moke-nav-breadcrumb"}>
                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                                Library
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>Data</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row>
                    <ListGroup className="moke-nav-container">
                        <ListGroup.Item action
                            className={"moke-nav-item text-primary"}
                            variant={this.state.isActive[0] as any}
                            onClick={() => {
                                this.whichIsActive(0);
                                this.props.history.push("/article");
                            }}>
                            文学宝库
                        </ListGroup.Item>
                        <ListGroup.Item action
                            className={"moke-nav-item text-primary"}
                            variant={this.state.isActive[1] as any}
                            onClick={() => {
                                this.whichIsActive(1);
                                this.props.history.push("/story");
                            }}>
                            典故大全
                        </ListGroup.Item>
                        <ListGroup.Item action
                            className={"moke-nav-item text-primary"}
                            variant={this.state.isActive[2] as any}
                            onClick={() => {
                                this.whichIsActive(2);
                                this.props.history.push("/user");
                            }}>
                            个人中心
                        </ListGroup.Item>
                        <ListGroup.Item action
                            className={"moke-nav-item text-primary"}
                            variant={this.state.isActive[3] as any}
                            onClick={() => {
                                this.whichIsActive(3);
                                this.props.history.push("/create");
                            }}>
                            创作中心
                        </ListGroup.Item>
                    </ListGroup>
                </Row>
                <LoginModal isOpen={this.state.isOpenLoginModal}
                    onClose={() => {
                        this.setState({
                            isOpenLoginModal: false
                        });
                    }} />
                <RegisterModal
                    isOpen={this.state.isOpenRegisterModal}
                    onClose={() => {
                        this.setState({
                            isOpenRegisterModal: false
                        });
                    }}
                />
            </React.Fragment>
        )
    }

    private whichIsActive = (index: number): void => {
        const isActive = [...this.state.isActive];
        isActive.fill(undefined);
        isActive[index] = "primary";
        this.setState({
            isActive,
        });
    }

    private renderUserButtonGroup = () => {
        return (
            <React.Fragment>
                <Button variant="outline-info"
                    onClick={() => {

                    }}>
                    {this.props.username}
                </Button>
                <Button variant="outline-danger"
                    onClick={() => {
                        this.props.logout();
                    }}>注销</Button>
            </React.Fragment>
        );
    }

    private renderLoginAndRegisterButtonGroup = () => {
        return (
            <React.Fragment>
                <Button variant="outline-info"
                    onClick={() => {
                        this.setState({ isOpenLoginModal: true });
                    }}>登录</Button>
                <Button variant="outline-info"
                    onClick={() => {
                        this.setState({ isOpenRegisterModal: true });
                    }}>注册</Button>
            </React.Fragment>
        );
    }
}
