import React from 'react'

export const requestMaker = () => {
  const xmlhttp = new XMLHttpRequest()
  xmlhttp.open('GET', 'http://demo.sibers.com/users')
  xmlhttp.send()

  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) { 
      localStorage.setItem('contacts', xmlhttp.responseText)
      window.location.reload() 
    }  
  }
   
  return (
      <h2>SERVER ERROR</h2> 
  )
}
 // if server down or silent window doesn't reload and requestMaker return <h2>SERVER ERROR</h2> 

