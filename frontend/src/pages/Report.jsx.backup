import { useState } from "react";
import { motion } from "framer-motion";
import api from "../services/api";
import { kodagu } from "../data/kodagu";
import PremiumButton from "../components/PremiumButton";

export default function Report() {

  const [selectedTaluk, setSelectedTaluk] = useState("");
  const [selectedPanchayat, setSelectedPanchayat] = useState("");

  const [form, setForm] = useState({
    district: "Kodagu",
    taluk: "",
    panchayat: "",
    village: "",
    description: "",
    latitude: null,
    longitude: null,
    before_image: ""
  });

  const inputStyle =
    "w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none";

  const getLocation = () => {

    navigator.geolocation.getCurrentPosition(
      (position) => {

        setForm((prev) => ({
          ...prev,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }));

      },
      () => {

        alert(
          "Please allow location access"
        );

      }
    );

  };

  const submitComplaint = async () => {

    if (!form.taluk) {
      alert("Please Select Taluk");
      return;
    }

    if (!form.panchayat) {
      alert("Please Select Panchayat");
      return;
    }

    if (!form.village) {
      alert("Please Select Village");
      return;
    }

    if (!form.description.trim()) {
      alert("Please Enter Description");
      return;
    }

    if (
      form.latitude === null ||
      form.longitude === null
    ) {
      alert("Please Get GPS Location");
      return;
    }

    if (!form.before_image) {
      alert("Please Upload Garbage Image");
      return;
    }

    try {

      const res = await api.post(
        "/report",
        form
      );

      alert(
        "Complaint Created Successfully\nComplaint ID: " +
        res.data.complaint_id
      );

      setForm({
        district: "Kodagu",
        taluk: "",
        panchayat: "",
        village: "",
        description: "",
        latitude: null,
        longitude: null,
        before_image: ""
      });

      setSelectedTaluk("");
      setSelectedPanchayat("");

    } catch (err) {

      console.log(err);

      alert(
        "Error Creating Complaint"
      );

    }

  };

  return (

    <motion.div
      initial={{
        opacity: 0,
        y: 20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.5
      }}
      className="
      backdrop-blur-xl
      bg-white/40
      border border-white/20
      shadow-2xl
      rounded-3xl
      p-8
      "
    >

      <h1 className="text-4xl font-extrabold mb-6 text-center">
        🗑️ Report Garbage
      </h1>

      <div className="space-y-4">

        <input
          value="Kodagu"
          disabled
          className={inputStyle}
        />

        <select
          className={inputStyle}
          value={selectedTaluk}
          onChange={(e) => {

            setSelectedTaluk(
              e.target.value
            );

            setSelectedPanchayat("");

            setForm({
              ...form,
              taluk: e.target.value,
              panchayat: "",
              village: ""
            });

          }}
        >
          <option value="">
            Select Taluk
          </option>

          {Object.keys(kodagu).map(
            (taluk) => (
              <option
                key={taluk}
                value={taluk}
              >
                {taluk}
              </option>
            )
          )}

        </select>

        <select
          className={inputStyle}
          value={selectedPanchayat}
          onChange={(e) => {

            setSelectedPanchayat(
              e.target.value
            );

            setForm({
              ...form,
              taluk: selectedTaluk,
              panchayat:
                e.target.value,
              village: ""
            });

          }}
        >
          <option value="">
            Select Panchayat
          </option>

          {selectedTaluk &&
            Object.keys(
              kodagu[selectedTaluk]
            ).map(
              (panchayat) => (
                <option
                  key={panchayat}
                  value={panchayat}
                >
                  {panchayat}
                </option>
              )
            )}

        </select>

        <select
          className={inputStyle}
          value={form.village}
          onChange={(e) =>
            setForm({
              ...form,
              village:
                e.target.value
            })
          }
        >
          <option value="">
            Select Village
          </option>

          {selectedTaluk &&
            selectedPanchayat &&
            kodagu[
              selectedTaluk
            ][
              selectedPanchayat
            ].map(
              (village) => (
                <option
                  key={village}
                  value={village}
                >
                  {village}
                </option>
              )
            )}

        </select>

        <input
          className={inputStyle}
          placeholder="Description"
          value={form.description}
          onChange={(e) =>
            setForm({
              ...form,
              description:
                e.target.value
            })
          }
        />

        <div className="flex gap-4">

          <PremiumButton
            color="blue"
            onClick={getLocation}
          >
            📍 Get GPS Location
          </PremiumButton>

          <PremiumButton
            color="green"
            onClick={submitComplaint}
          >
            🚀 Submit Complaint
          </PremiumButton>

        </div>

        <div className="bg-gray-100 p-4 rounded-xl">

          <p>
            Latitude:
            {" "}
            {form.latitude}
          </p>

          <p>
            Longitude:
            {" "}
            {form.longitude}
          </p>

        </div>

        <input
          type="file"
          className={inputStyle}
          onChange={async (e) => {

            const file =
              e.target.files?.[0];

            if (!file) return;

            const formData =
              new FormData();

            formData.append(
              "file",
              file
            );

            const uploadRes =
              await api.post(
                "/upload",
                formData,
                {
                  headers: {
                    "Content-Type":
                      "multipart/form-data"
                  }
                }
              );

            setForm({
              ...form,
              before_image:
                uploadRes.data.path
            });

          }}
        />

      </div>

    </motion.div>

  );

}
