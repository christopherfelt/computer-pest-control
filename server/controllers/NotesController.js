import express from "express";
import BaseController from "../utils/BaseController";
import { notesService } from "../services/NotesService";
import auth0Provider from "@bcwdev/auth0provider";

export class NotesController extends BaseController {
  constructor() {
    super("api/notes");
    this.router
      .get("", this.getAll)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(auth0Provider.getAuthorizedUserInfo)
      .post("", this.create)
      .get("/:id", this.getById)
      .delete("/:id", this.remove);
  }
  async getAll(req, res, next) {
    try {
      let data = await notesService.findAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let data = await notesService.findById(req.params.id);
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
      let data = await notesService.create(req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await notesService.edit(
        req.params.id,
        req.userInfo.email,
        req.body
      );
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async remove(req, res, next) {
    try {
      let data = await notesService.remove(req.params.id, req.userInfo.email);
      return res.send("deleted");
    } catch (error) {
      next(error);
    }
  }
}
