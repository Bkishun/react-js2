import React from 'react'
import { data, data1 } from '../App'

function ChildA() {
  return (
    <data.Consumer>
        {
            (user) => {
                return (
                   <data1.Consumer>
                        {
                            (pass) => {
                                return (
                                    <>
                                    <h1>my name is {user.name} and my age is {user.age}</h1>
                                    <h2>Password : {pass}</h2>
                                    </>
                                    
                                )
                            }
                        }
                   </data1.Consumer>
                )
            }
        }
    </data.Consumer>
  )
}

export default ChildA