import React from 'react'
import styled, { keyframes, ThemeProvider } from "styled-components";

const Demo = () => {
  const inputRef = React.createRef();

  return (
    <div>
      {/* <Title>
        styled-components
      </Title>
      <Title primary>
        styled-components
      </Title>
      <TomatoButton>
        styled -componets
      </TomatoButton>
      <Input placeholder="A bigger text input" size="2em" />
      <PasswordInput 
        placeholder="A bigger password input"
        size="2em"/> */}
        {/* <Rotate>
          &lt; 💅🏾 &gt;
        </Rotate> */}

        <Button>Normal</Button>
        {/* 使用ThemeProvider 自定义theme, theme 可以自定义一整套 样式表 */}
        <ThemeProvider 
          theme={theme}
        >
          <Button>
            Theme
          </Button>
        </ThemeProvider>
        <Input
          ref={inputRef}
          placeholder="Hover to focus"
          onMouseEnter={() => {
            return inputRef.current.focus()
          }}
        />
    </div>
  )
}

const Title = styled.button`
  background: ${
    (props) => {
      return props.primary ? 'palevioletred' : 'white'
    }
  };
  color: ${
    props => {
      return props.primary ? 'white' : 'palevioletred'
    }
  };
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

const Button = styled.button`
  color: ${props => props.theme.main};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.theme.main};
  border-radius: 3px;
`

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato
`

const Input = styled.input.attrs(props => {
  return {
    type: 'text',
    size: props.size || '1em'
  }
})`
  border: 2px solid palevioletred;
  margin: ${props => props.size};
  padding: ${props => props.size};
`

const PasswordInput = styled(Input).attrs({
  type: 'password'
})`
  border: '2px solid aqua'
`

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

const Rotate = styled.div`
  animation: ${rotate} 2s infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`

Button.defaultProps = {
  theme: {
    main: "palevioletred"
  }
}

const theme = {
  main: 'mediumseagreen'
}

export default Demo