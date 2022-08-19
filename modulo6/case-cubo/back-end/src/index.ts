import { app } from "./app"
import { createUser } from "./endpoints/createUser"
import { deleteUser } from "./endpoints/deleteUser"
import { getAllUsers } from "./endpoints/getAllUsers"
import { getParticipationSum } from "./endpoints/getParticipationSum"


app.post("/users", createUser)
app.get("/users", getAllUsers)
app.delete("/users/:id", deleteUser)
app.get("/sum", getParticipationSum)