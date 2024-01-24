module.exports.Tickets = {
  getAllTickets: (req, res) => {
    res.send("Get all tickets");
  },
  getOneTicket: (req, res) => {
    res.send("Get an existing ticket");
  },
  createTicket: (req, res) => {
    res.send("Create a new ticket");
  },
  updateTicket: (req, res) => {
    res.send("Update an existing ticket");
  },
  deleteTicket: (req, res) => {
    res.send("Delete an existing ticket");
  },
};
