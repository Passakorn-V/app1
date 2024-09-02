import React from 'react'
import {userContext} from './context'

export default class extends React.Component {
    static contextType = userContext

    render(){
        let[user,setUser]= this.context

        const headerStyle ={
            backgroundColor:'#cee',
            textAlign:'center',
            padding:5
        }

        const onClickSignout = (event) =>{
            event.preventDefault()
            setUser('')
        }

        const onClickSignin = (event) =>{
            event.preventDefault()
            setUser('Tom and Jerry')
        }

        return(
            <div style={headerStyle}>
                <a href=""> Home </a>&nbsp;-&nbsp;
                <a href=""> Product </a>&nbsp;-&nbsp;
                <a href=""> Contact Us </a>&nbsp;-&nbsp;&nbsp;
                {
                    (user)
                    ?<span>[{user}&nbsp;:&nbsp;<a href="" onClick={onClickSignout}>SignOut</a>]</span>
                    :<span>[<a href="" onClick={onClickSignin}>Signin</a>]</span>
                }
                
            </div> 
        )
    }
}