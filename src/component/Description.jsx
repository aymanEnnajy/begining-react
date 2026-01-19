/*
import { std } from "../outils/std.js";
export function Description() {
  return (
    <>
    <div className="max-w-4xl mx-auto px-6 py-12 text-center">
      
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to our website
      </h1>

      <p className="text-gray-600 text-lg mb-10">
        This is a simple home page content.
      </p>

      <section className="bg-gray-100 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          About Us
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Learn more about our services and what we offer.
        </p>
      </section>

    </div>
     <div className="overflow-x-auto" style={{padding:'12px'}}>
      <table className="min-w-full border-2 border-black border-collapse text-center">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2 border border-black">ID</th>
            <th className="px-4 py-2 border border-black">Name</th>
            <th className="px-4 py-2 border border-black">Age</th>
            <th className="px-4 py-2 border border-black">Course</th>
          </tr>
        </thead>
        <tbody>
          {std.map((student) => (
            <tr
              key={student.id}
              className="hover:bg-gray-100 transition-colors"
            >
              <td className="px-4 py-2 border border-black">{student.id}</td>
              <td className="px-4 py-2 border border-black">{student.name}</td>
              <td className="px-4 py-2 border border-black">{student.age}</td>
              <td className="px-4 py-2 border border-black">{student.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}*/

import * as React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import WebIcon from "@mui/icons-material/Web";
import CodeIcon from "@mui/icons-material/Code";
import SpeedIcon from "@mui/icons-material/Speed";

export default function FeaturesSection() {
  const features = [
    {
      icon: <WebIcon fontSize="large" color="primary" />,
      title: "Modern Design",
      description:
        "Clean, modern, and fully responsive UI using Material UI.",
    },
    {
      icon: <CodeIcon fontSize="large" color="primary" />,
      title: "Clean Code",
      description:
        "Well-structured, maintainable, and scalable React code.",
    },
    {
      icon: <SpeedIcon fontSize="large" color="primary" />,
      title: "Fast Performance",
      description:
        "Optimized components for speed and best user experience.",
    },
  ];

  return (
    <Box sx={{ py: 10, px: { xs: 2, md: 6 }, backgroundColor: "#fafafa" }}>
      {/* Section Title */}
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        mb={2}
      >
        What We Offer
      </Typography>

      <Typography
        variant="body1"
        align="center"
        color="text.secondary"
        mb={6}
      >
        High quality services to help you grow your business
      </Typography>

      {/* Cards */}
      <Grid container spacing={4} sx={{justifyContent: "center"}}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{ width:'25vw',
                
                textAlign: "center",
                p: 3,
                height: "100%",
                borderRadius: 4,
                boxShadow: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                <Box mb={2}>{feature.icon}</Box>

                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                >
                  {feature.title}
                </Typography>

                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

