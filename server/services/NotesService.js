import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class NotesService {
  async findAll(query = {}) {
    let data = await dbContext.Notes.find(query).populate(
      "creator",
      "name picture"
    );
    return data;
  }
  async findById(id) {
    let data = await dbContext.Notes.findById(id);
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }

  async create(data) {
    return await dbContext.Notes.create(data);
  }

  async edit(id, email, body) {
    let data = await dbContext.Notes.findOneAndUpdate(
      { _id: id, creatorEmail: email },
      body,
      { new: true }
    );
    if (!data) {
      throw new BadRequest("Invalid ID or you od not own thi");
    }
    return data;
  }
}

export const notesService = new NotesService();
