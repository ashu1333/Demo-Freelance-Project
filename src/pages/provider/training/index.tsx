import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { IMAGES_URL } from "../../../constants/Images";
import useStyles from "./style";
import Header from "../../common/header";
import Footer from "../../common/footer";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { ProviderAction } from "../../../redux/common/actions";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
interface TrainingProps {
  name: string;
  Provider: any;
}
const Training: React.SFC<TrainingProps> = ({ name }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const trainingEducation = useSelector((state: TrainingProps) =>
    state.Provider.trainingEducation ? state.Provider.trainingEducation : []
  );
  React.useEffect(() => {
    dispatch(ProviderAction.trainingEducation({}));
  }, []);

  return (
    <div className={classes.root}>
      <Header />
      <Grid>
        <Grid container xs={12} className={classes.trainingtop}>
          <Grid item xs={6}>
            <p className={classes.trainingttitle}>HYDRAFACIAL</p>
            <p className={classes.trainingttext}>Training and Education</p>
          </Grid>
          <Grid item xs={6}>
            <img
              src={IMAGES_URL.TRAINING}
              width="100%"
              style={{ marginBottom: "-4px" }}
            />
          </Grid>
        </Grid>
        {trainingEducation.map((trainingObj) => (
          <Grid>
            <Grid
              xs={10}
              className={classes.midLSection}
              style={{ backgroundColor: "white", marginLeft: 100 }}
            >
              <Typography variant="h4" className={classes.trainingptitle}>
                <span style={{ color: "#9568c4" }}>{trainingObj.title}</span> -{" "}
                {trainingObj.sub_title}{" "}
              </Typography>
              <Typography className={classes.trainingptext}>
                {trainingObj.description}
              </Typography>
            </Grid>
            <Grid
              xs={12}
              direction={"row"}
              container
              justify={"center"}
              style={{ backgroundColor: "white" }}
            >
              <TableContainer
                component={Paper}
                style={{ width: "90%", margin: "0px auto" }}
              >
                <Table aria-label="simple table">
                  <TableHead
                    style={{ backgroundColor: "black" }}
                    className={classes.tablettitle}
                  >
                    <TableRow
                      style={{ height: 50 }}
                      className={classes.tablettitle}
                    >
                      <TableCell
                        align="center"
                        style={{ color: "#9568c4", width: "90px" }}
                      >
                        Agenda
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{ color: "#9568c4", width: "120px" }}
                      >
                        Highlights
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{ color: "#9568c4", width: "120px" }}
                      >
                        Pre-requisites
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{ color: "#9568c4", width: "100px" }}
                      >
                        Ideal Attendees
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{ color: "#9568c4", width: "80px" }}
                      >
                        Key Takeaway
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      style={{ height: 200 }}
                      className={classes.tablettext}
                    >
                      <TableCell align="center">
                        <Typography>{trainingObj.agenda_day}</Typography>
                        <Typography>{trainingObj.agenda_time} </Typography>
                      </TableCell>
                      <TableCell align="center">
                        {trainingObj.highlights}
                      </TableCell>
                      <TableCell align="center">
                        {trainingObj.pre_requisites}
                      </TableCell>
                      <TableCell align="center">
                        {trainingObj.ideal_attendees}
                      </TableCell>
                      <TableCell align="center">
                        {trainingObj.key_takeaway}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        ))}
        <Grid
          xs={7}
          className={classes.midLSection}
          style={{ backgroundColor: "white", marginLeft: 260 }}
        >
          <Typography variant="h6" className={classes.trainingptext}>
            To register or learn more about any of our programs, visit{" "}
            <Link href="http://hydrafacial.com/training">
              {" "}
              hydrafacial.com/training{" "}
            </Link>{" "}
            All programs include specialized promotions and HydraFacial swag!
          </Typography>
          <br></br>
          <Typography variant="h6" className={classes.trainingptext}>
            {
              "Visit any of our state-of-the-art HydraFacial Experience Centers to complete your training:"
            }
          </Typography>
          <Typography variant="h6" className={classes.trainingptext}>
            {
              "CHICAGO | DALLAS | LONG BEACH | ORLANDO | EAST COST(OPENING 2020)"
            }
          </Typography>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Training;
