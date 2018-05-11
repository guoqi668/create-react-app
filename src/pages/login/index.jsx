import React, { Component } from 'react';
import { Button, List, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';
import './index.less';
import { TLSSocket } from 'tls';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { emailError: false,value: '' }
    }
    emailChange(value){
        if(value.length<11) {
            console.log('aa')
            this.setState({ emailError: true });
        } else {
            this.setState({ emailError: false });
        }
        this.setState({ value: value })
    }
    render() {
        const {getFieldProps} = this.props.form;
        return (
            <div className="c-login">
                <h1 className="c-login__title">登录</h1>
                <List>
                    <InputItem
                        // {...getFieldProps('email')}
                        typepe="text"
                        placeholder="输入邮箱"
                        clear

                        error={this.state.emailError}
                        onChange={this.emailChange.bind(this)}
                        value={this.state.value}
                    >
                        输入邮箱{this.props.email}
                    </InputItem>
                </List>

                <Button>登录</Button>
            </div>
         )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        email: state.counter.count
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            dispatch({type: 'increage'})
        }
    }
}

export default createForm()(connect(mapStateToProps, mapDispatchToProps)(Login));