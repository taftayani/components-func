const ButtonComponent = ({ OnClick, TextBtn, ClassBtn }) => {
  return (
    <>
      <button type="submit" className={`mr-10px ${ClassBtn}`} onClick={OnClick}>
        {TextBtn}
      </button>
    </>
  );
};
export default ButtonComponent;
