import express from "express";
import BaseController from "../utils/BaseController";
import { bugsService } from "../services/BugsService";
import auth0Provider from "@bcwdev/auth0provider";
import { notesService } from "../services/NotesService";

export class BugsController extends BaseController {
  constructor() {
    super("api/bugs");
    this.router
      .get("", this.getAll)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(auth0Provider.getAuthorizedUserInfo)
      .post("", this.create)
      .get("/:id", this.getBugById)
      .get("/:id/notes", this.getNotesByBugId)
      .post("/:id/notes", this.createNote);
  }
  async getAll(req, res, next) {
    try {
      let data = await bugsService.findAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getBugById(req, res, next) {
    try {
      let data = await bugsService.findById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getNotesByBugId(req, res, next) {
    try {
      let data = await notesService.findAll({ bug: req.params.id });
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorEmail = req.userInfo.email;
      req.body.user = req.userInfo.email;
      req.body.collaborators = [req.userInfo.email];
      //   console.log();
      let data = await bugsService.create(req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async createNote(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email;
      req.body.user = req.userInfo.email;
      req.body.bug = req.params.id;
      let data = await notesService.create(req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await bugsService.edit(
        req.params.id,
        req.userInfo.email,
        req.body
      );
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
}
