import { Instagram, Pinterest, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { centerIt, columnIt, sectionIt, mainColor, buttonIt } from '../globalStyles'

const Container = styled.div`
${sectionIt};
${centerIt};
`
const Image = styled.img`
position: absolute;
top:0;
left: 0;
object-fit: cover;
height: 100%;
width: 100%;
clip-path: polygon(15% 18%, 0% 100%, 60% 53%);
z-index: 3;
`


const Triangle1 = styled.div`
position: absolute;
top:100px;
left: 0;
object-fit: cover;
height: 80%;
width: 80%;
clip-path: polygon(9% 30%, 0% 100%, 2% 96%, 10% 35%, 59% 35%, 2% 94%, 0 100%, 64% 33%);
background: ${mainColor};
z-index: 1;
opacity: 0.6;
`
const Triangle2 = styled.div`
position: absolute;
top:300px;
left: 50px;
object-fit: cover;
height: 100%;
width: 80%;
clip-path: polygon(9% 30%, 0% 100%, 2% 96%, 10% 35%, 59% 35%, 2% 94%, 0 100%, 64% 33%);
background: ${mainColor};
z-index: 1;
opacity: 0.4;
transform: rotate(50deg);
`
const Triangle3 = styled.div`
position: absolute;
top:200px;
left: -100px;
object-fit: cover;
height: 100%;
width: 80%;
clip-path: polygon(9% 30%, 0% 100%, 2% 96%, 10% 35%, 59% 35%, 2% 94%, 0 100%, 64% 33%);
background: ${mainColor};
z-index: 1;
opacity: 0.2;
transform: rotate(70deg);
`

const Triangle4 = styled.div`
position: absolute;
top:600px;
left: -600px;
object-fit: cover;
height: 100%;
width: 80%;
clip-path: polygon(9% 30%, 0% 100%, 2% 96%, 10% 35%, 59% 35%, 2% 94%, 0 100%, 64% 33%);
background: ${mainColor};
z-index: 1;
opacity: 0.3;
transform: rotate(150deg);
`

const Triangle5 = styled.div`
position: absolute;
top: -100px;
left: -300px;
object-fit: cover;
height: 100%;
width: 80%;
clip-path: polygon(9% 30%, 0% 100%, 2% 96%, 10% 35%, 59% 35%, 2% 94%, 0 100%, 64% 33%);
background: ${mainColor};
z-index: 1;
opacity: 0.1;
transform: rotate(60deg);
`

const EmptyContainer = styled.div`
flex: 0.8;
`

const TitleContainer = styled.div`
flex: 1;
${columnIt};
height: 70%;
width: 100%;
`

const TitleWrapper = styled.div`
height: 80%;
width: 100%;
text-align: end;
`

const SubTitle = styled.h2`
font-size: 35px;
font-weight: 400;
letter-spacing: 2px;
margin-right: 160px;
color: ${mainColor};
`

const Title = styled.h1`
font-size: 70px;

`
const FormContainer = styled.div`
flex: 1;
${columnIt};
margin-top: 50px;
`
const FormWrapper = styled.form`
height: 80%;
width: 75%;
${columnIt};
align-items: center;
`

const IconContainer = styled.div`
height: 20%;
width: 100%;
${centerIt};
margin-bottom: 50px;
margin-top: 60px;
`

const IconWrapper = styled.div`
height: 100%;
width: 80%;
${centerIt};
`

const iconStyle = {
    fontSize: "40px",
    margin: "0 15px",
    cursor: "pointer",
    color: "#555454"
   
}

const Input = styled.input`
width: 80%;
height: 40px;
padding: 15px;
border: 1px solid gray;
margin-bottom: 20px;
outline: none;
font-size: 16px;
color: gray;
`

const TextArea = styled.textarea`
width: 80%;
height: 150px;
padding: 15px;
border: 1px solid gray;
margin-bottom: 20px;
outline: none;
font-size: 16px;
color: #b1aeae;
`

const Desc = styled.p`
text-align: center;
font-size: 28px;
line-height: 40px;
margin-bottom: 20px;
`
const Button = styled.button`
${buttonIt};
background-color: ${mainColor};
`


const Contact = () => {
    return (
        <Container>
            <Image src="https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="image of the city" />
            <Triangle1></Triangle1>
            <Triangle2></Triangle2>
            <Triangle3></Triangle3>
            <Triangle4></Triangle4>
            <Triangle5></Triangle5>
            <EmptyContainer></EmptyContainer>
            <TitleContainer>
                <TitleWrapper>
                <SubTitle>#justcallme</SubTitle>
                <Title>Contact Us</Title> 
                </TitleWrapper>        
            </TitleContainer>
            <FormContainer>
           
                <FormWrapper>
                    <IconContainer>
                        <IconWrapper>
                            <Twitter style={iconStyle}/>
                            <Instagram style={iconStyle}/>
                            <Pinterest style={iconStyle}/>
                        </IconWrapper>
                    </IconContainer>
                  <Desc>We'd love to hear from you.</Desc>
                    <Input type="email" placeholder="Your Email" />
                    <TextArea >Your Message</TextArea>
                    <Button>Join our club</Button>
                </FormWrapper>
            </FormContainer>
        </Container>
    )
}

export default Contact
