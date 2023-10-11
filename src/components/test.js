import React, { useEffect } from 'react';
import { Collapsible, CollapsibleItem, Icon } from 'react-materialize';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './test.css';

export default function Test () {
    const { theme } = useContext( ThemeContext );
    useEffect( () => {
        const collapsible = document.querySelector( '.collapsible' );
        collapsible.style.borderColor = `white`;
        const collapsibleHeader = document.querySelectorAll( '.about-container .collapsible-header' );
        collapsibleHeader.forEach( header => {
            header.style.borderWidth=`3px`;
            header.style.borderColor = `black`;
            header.style.padding = '2rem';
            header.style.color=``;
            header.style.backgroundColor=`${theme.backgroundColor}`;
        } );
        const headerSpans = document.querySelectorAll( '.about-container .collapsible-header span' );
        headerSpans.forEach( span => {
            span.style = `color:${theme.color}; font-weight: 600`;
        } );
        const headerIcons = document.querySelectorAll( '.about-container .collapsible-header .material-icons' );
        headerIcons.forEach( icon => {
            icon.style = `color: ${theme.color}`;
        } );
        const bodys = document.querySelectorAll( '.about-container .collapsible-body' );
        bodys.forEach( body => {
            body.style = `color: black ; font-weight: 500; border-bottom: 2px solid ${theme.color}; background-color:yellow`;
        } );

    }, [theme] );
    return (
        <div className='row about-container' style={{ position: 'relative', margin: '0', height: '100vh',  }}>
            <h3 style={{textAlign:`center`, margin:`30px 0 0 0`, color:'white '}}>About US</h3>
            <div className='col s10 m10' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', margin: '0',border:' 2px solid gray',boxShadow:'inherit' }}>
                <Collapsible accordion>
                    <CollapsibleItem
                        expanded={false}
                        header={<span>Our Email</span>}
                        icon={<Icon style={{border:`none`}}>email</Icon>}
                        node="div"
                    >
                        abc123xyzwm@gmail.com
                    </CollapsibleItem>
                    <CollapsibleItem
                        expanded={false}
                        header={<span>Our number</span>}
                        icon={<Icon>phone</Icon>}
                        node="div"
                    >
                        123.456.789
                    </CollapsibleItem>
                    <CollapsibleItem
                        expanded={false}
                        header={<span>You know, FYI, you can buy a paddle. Did you not plan for this contingency?</span>}
                        icon={<Icon>whatshot</Icon>}
                        node="div"
                    >
                        You know, FYI, this website usr for learning
                    </CollapsibleItem>
                </Collapsible>
            </div>
        </div>
    );
}