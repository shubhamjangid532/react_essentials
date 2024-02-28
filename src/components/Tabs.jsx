export default ({ children, buttons, ButtonContainer="menu" }) => {
    // const ButtonContainer = buttonContainer;
    return <>
        <ButtonContainer>
            {buttons}
        </ButtonContainer>
    </>
}