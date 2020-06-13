import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class BugsService {
  async findAll(query = {}) {
    let data = await dbContext.Bugs.find(query).populate(
      "creator",
      "name picture"
    );
    return data;
  }
  async findById(id) {
    let data = await dbContext.Bugs.findById(id);
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }

  async create(data) {
    return await dbContext.Bugs.create(data);
  }

  async edit(id, email, body) {
    let data = await dbContext.Bugs.findOneAndUpdate(
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

export const bugsService = new BugsService();
