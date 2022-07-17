import styled from "styled-components";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import { Box, Button, TextField } from "@mui/material";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 10px 8px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <LogoDevIcon style={{ fontSize: "3rem" }} />
      <TextField
        sx={{ width: 300 }}
        placeholder="Search..."
        variant="outlined"
        inputProps={{
          style: {
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
          },
        }}
      />
      <Box
        sx={{
          ml: "auto",
        }}
      >
        <Button href="/login" sx={{ mr: 3 }} variant="text">
          Log In
        </Button>
        <Button sx={{ mr: 3 }} variant="outlined">
          Create Account
        </Button>
      </Box>
    </StyledHeader>
  );
};

export default Header;
