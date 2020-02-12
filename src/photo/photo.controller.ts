import { Controller, Request, UseGuards, Get, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PhotoService } from './photo.service'

@Controller('photo')
@UseGuards(AuthGuard('jwt'))
export class PhotoController {
    constructor(private readonly photoService: PhotoService) { }   
     
    @Get()
    getProfile(@Request() req) {
        return this.photoService.findAll();
    }
}