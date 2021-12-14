import axios from "axios";

interface Team {
  name: string;
}

interface Event {
  id: number;
  eventName: string;
  teams: Team[];
  trainers: number[];
  participants: number[];
  admins: number[];
}

const getEvents = async (): Promise<Event[]> => {
  console.log("trying to get Events");

  try {
    const response = await axios.get("http://localhost:1337/events/all");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const handleEventCreate = (
  eventName: string,
  teams: string[],
  trainers: number[],
  participants: number[],
  admins: number[]
) => {
  console.log(eventName, teams, trainers, participants, admins);
  let teamsString = JSON.stringify(teams);
  let trainerString = JSON.stringify(trainers);
  let partString = JSON.stringify(participants);
  let adminString = JSON.stringify(admins);
  axios
    .post("http://localhost:1337/events/create", {
      eventName: eventName,
      teams: teamsString,
      trainers: trainerString,
      participants: partString,
      admins: adminString,
    })
    .then((res) => {
      console.log(res.data);
      getEvents();
    })
    .catch((error) =>
      console.error(`There was an error creating the User: ${eventName} `)
    );
};

const getEventsByUserId = async (userID: number): Promise<Event[]> => {
  try {
    const response = await axios.post(
      "http://localhost:1337/events/getEventsByUserId",
      {
        userID: userID,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export { getEvents, handleEventCreate, getEventsByUserId };
