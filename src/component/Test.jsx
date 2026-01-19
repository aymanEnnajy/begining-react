import { Box, Typography } from "@mui/material";

/*
  Props = données envoyées depuis le composant parent (App.jsx)
  Ici on reçoit :
  - title
  - description
*/
export default function InfoSection(props) {

  /*
    props = {
      title: "About Us",
      description: "We build modern web applications"
    }
  */

  return (
    <>
    <Box
      sx={{
        py: 8,
        px: 2,
        backgroundColor: "#f5f5f5",
        textAlign: "center",
      }}
    >
      {/* props.title : valeur envoyée depuis App.jsx */}
      <Typography variant="h4" fontWeight="bold" mb={2}>
        {props.title}
      </Typography>

      {/* props.description : valeur envoyée depuis App.jsx */}
      <Typography variant="body1" color="text.secondary">
        {props.description}
      </Typography>
      <Typography variant="body1" color="text.secondary" mt={2}>
        Name: {props.name}, Age: {props.age}, Role: {props.role}
      </Typography>
    </Box>

    
    </>
  );
}
