import React, {PropTypes} from 'react'
// import the css styles using: `import './03-styling.css'`
// this will use webpack to load the css styles into your app.

function Box(props) {
  return (
    // render a div with the props:
    // - className that is assigned to `Box Box--${props.size}`
    // - style that is assigned to props.style
    // inside the div, forward along props.children
    <div>Incomplete</div>
  )
}

// I'm gonna give this one to you. Isn't that nice? :)
Box.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
}

export const example = () => (
  <div>
    Examples go in here...
    Give me 3 usages of your {`<Box>`} component. One for each size.
    And for each, specify a `style` prop with some custom styling
    (whatever you want, maybe consider `backgroundColor`)
  </div>
)

export default Box
