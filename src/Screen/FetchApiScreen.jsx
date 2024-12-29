import React from "react";
import { useFetchApiData } from "../Hooks/FetchApiData";
import {
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

export const FetchApiScreen = () => {
  const { data, loading, error, setData } = useFetchApiData(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log("Api data is >>", data);

  const DeleteData = (id) => {
    setData((pre) => pre.filter((item) => item.id !== id));
  };
  const UpdateData = (id) => {
    setData((pre) =>
      pre.map((item) =>
        item.id === id ? { ...item, title: "Updated By Majid" } : item
      )
    );
  };

  return (
    <Box
      sx={{
        display: "block",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "100vw",
        margin: "auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: "#333", fontWeight: "bold" }}
      >
        Custom Hook
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        gutterBottom
        sx={{ color: "#555" }}
      >
        Below is a list of users fetched from the API with Custom Hook.
      </Typography>
      <Paper elevation={3} sx={{ marginTop: "20px", padding: "10px" }}>
        <List>
          {data.map((item) => (
            <ListItem
              key={item.id}
              sx={{
                borderBottom: "1px solid #ddd",
                "&:last-child": { borderBottom: "none" },
              }}
            >
              <ListItemText primary={item.title} sx={{ color: "#333" }} />
              <IconButton
                onClick={() => {
                  DeleteData(item.id);
                }}
              >
                <Delete sx={{ color: "black" }} />
              </IconButton>

              <IconButton
                onClick={() => {
                  UpdateData(item.id);
                }}
              >
                <Edit sx={{ color: "black" }} />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};
