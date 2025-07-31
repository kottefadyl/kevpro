import { StaticImageData } from 'next/image'
import csslog from '../img/css3-logo-png_seeklogo-186678 1.png'
import docker from '../img/docker.png'
import expo from '../img/expo.png'
import express from '../img/express-js 1.png'
import figma from '../img/figma.png'
import ghl from '../img/GHL.png'
import gith from '../img/gith.png'
import goFiber from  '../img/go-fiber.png'
import go from '../img/go.png'
import htmllog from '../img/html.png'
import mongo from '../img/mongo.png'
import nestjs from '../img/nestjs.png'
import nextjs from '../img/nextjs 1.png'
import react from '../img/react.png'
import sql from '../img/sql.png'
import tailwind from '../img/tailwind.png'
import ts from '../img/ts.png'

export interface Logotable {
    title: string;
    logo:StaticImageData
} 

export const languages : Logotable[] =[
    {
        title:'HTML',
        logo : htmllog
    },
        {
        title:'CSS',
        logo : csslog
    },
        {
        title:'Java script',
        logo : express
    },
        {
        title:'Typscript',
        logo : ts
    },
        {
        title:'SQL',
        logo : sql
    },
        {
        title:'Golang',
        logo : go
    },
]

export const frameWorkTool : Logotable[] =[
    {
        title:'React',
        logo : react
    },
        {
        title:'Expo',
        logo : expo
    },
        {
        title:'Tailwind css',
        logo : tailwind
    },
        {
        title:'Nextjs',
        logo : nextjs
    },
        {
        title:'Expressjs',
        logo : express
    },
        {
        title:'Nestjs',
        logo : nestjs 
    },
        {
        title:'Go-Fiber',
        logo : goFiber
    },
        {
        title:'MongoDB',
        logo : mongo
    },
]

export const other : Logotable[] =[
    {
        title:'Gith',
        logo : gith
    },
        {
        title:'Docker',
        logo : docker
    },
        {
        title:'Figma',
        logo : figma
    },
        {
        title:'G.H.L',
        logo : ghl
    }
]