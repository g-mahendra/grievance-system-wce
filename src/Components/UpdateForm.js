import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import { useData } from "../context/DataContext";
import backend from "../api/backend";
import Alert from "@material-ui/lab/Alert";

const UpdateForm = (props) => {
  const [value, setValue] = React.useState("Mess Owner");
  const [day, setDay] = useState("");
  const [breakfast, setbreakfast] = useState("");
  const [lunch, setlunch] = useState("");
  const [dinner, setdinner] = useState("");
  const { mess } = props.location.state;
  const { updateComponent } = useData();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);

  const handleSubmitMess = async () => {
    const id = mess.timetable.find(
      (row) => row.day.toLowerCase() === day.toLowerCase()
    );
    const messid = mess._id;
    const dayid = id._id;

    try {
      const res = await backend.post(`/updatemess`, {
        breakfast: breakfast,
        lunch: lunch,
        dinner: dinner,
        messid: messid,
        dayid: dayid,
      });
      setDone(true);
    } catch (error) {
      console.log(error);
      setNotDone(true);
    }
  };

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#eee",
        backgroundSize: "cover",
      }}
    >
      <Zoom in timeout={700}>
        <Paper
          elevation={20}
          style={{
            padding: 30,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Typography gutterBottom variant="h5" component="h5">
            Update Value
          </Typography>
          <>
            {done ? (
              <Alert severity="success">Updated Successfully!</Alert>
            ) : null}
            {notDone ? <Alert severity="error">Try Again</Alert> : null}
            <Box>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="day"
                label="day"
                id="day"
                value={day}
                placeholder="Enter a day of week"
                onChange={({ target }) => setDay(target.value)}
                margin="normal"
              />
            </Box>
            <Box>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="breakfast"
                label="breakfast"
                id="breakfast"
                value={breakfast}
                placeholder="Enter breakfast dish"
                onChange={({ target }) => setbreakfast(target.value)}
                margin="normal"
              />
            </Box>
            <Box>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="lunch"
                label="lunch"
                id="lunch"
                value={lunch}
                placeholder="Enter lunch dish"
                onChange={({ target }) => setlunch(target.value)}
                margin="normal"
              />
            </Box>
            <Box>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="dinner"
                label="dinner"
                type="dinner"
                id="dinner"
                value={dinner}
                placeholder="Enter dinner dish"
                onChange={({ target }) => setdinner(target.value)}
                margin="normal"
              />
            </Box>
            <Button
              style={{
                padding: 10,
                marginTop: 20,
                backgroundColor: "#A0A",
                color: "#FFF",
              }}
              onClick={() => {
                handleSubmitMess();
                updateComponent();
              }}
            >
              Update
            </Button>
          </>
        </Paper>
      </Zoom>
    </Box>
  );
};

export default UpdateForm;
