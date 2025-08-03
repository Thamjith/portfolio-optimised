import Stack from "../../components/Stack/Stack";
import Typography from "../../components/Typography/Typography";
import "./Welcomepage.scss";

const Welcomepage = () => {
  return (
    <Stack className="welcomepage">
      <img
        loading="lazy"
        src="src/assets/profileImages/thamjith-01.JPG"
        className="welcomepage__image"
      />
      <Typography variant="massive" className="welcomepage__text">
        Thamjith Thaha
      </Typography>
    </Stack>
  );
};

export default Welcomepage;
