import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Testimonial {
  id: number;
  name: string;
  comment: string;
  imgUrl: string;
  company: string;
}

interface TestimonialsState {
  items: Testimonial[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: TestimonialsState = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchTestimonials = createAsyncThunk<Testimonial[]>(
  "testimonials/fetchTestimonials",
  async () => {
    const response = await fetch("/testimonials.json");
    if (!response.ok) {
      throw new Error("Failed to fetch testimonials");
    }
    const data: Testimonial[] = await response.json();
    return data;
  }
);

const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestimonials.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchTestimonials.fulfilled,
        (state, action: PayloadAction<Testimonial[]>) => {
          state.status = "succeeded";
          state.items = action.payload;
        }
      )
      .addCase(fetchTestimonials.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default testimonialsSlice.reducer;
