# App Entry Point
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

app = FastAPI(
    title = "Streaky API",
    description = "Github-inspired habit tracking application",
    version = "1.0.0"
    )

# CORS Middleware Configuration
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # Adjust this in production for security
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

#Health Check Endpoint
@app.get("/health")
def health_check():
    return {"status": "ok"}

# Root endpoint
@app.get("/")
def root():
    return {
        "message": "Welcome to Streaky API",
        "docs": "/docs"
    }

# -------------------------------
# Routers (to be added next)
# -------------------------------
# from app.routes import habits, stats
# app.include_router(habits.router, prefix="/habits", tags=["Habits"])
# app.include_router(stats.router, prefix="/stats", tags=["Stats"])