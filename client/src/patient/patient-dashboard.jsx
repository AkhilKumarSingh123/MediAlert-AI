
import React, { useState, useEffect } from "react";
import AppointmentForm from "../components/AppointmentFrom.jsx";
import axios from "axios";
import {
  UserCircle,
  Mail,
  Phone,
  Calendar,
  MapPin,
  CalendarDays,
} from "lucide-react";

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full py-4 text-left text-lg font-medium text-blue-700 hover:text-blue-900 focus:outline-none"
      >
        {title}
        <span>{open ? "−" : "+"}</span>
      </button>
      {open && <div className="pb-4 px-2 text-gray-700">{children}</div>}
    </div>
  );
};

const PatientDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [userDetail, setUserDetail] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [pastAppointments, setPastAppointments] = useState([]);
  const [ambulanceAppointments, setAmbulanceAppointments] = useState([]);
  const [date, setDate] = useState();
  const [change, setChange] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleBookAmbulance = async (e) => {
    e.preventDefault();

    const form = e.target;
    const address = form.address.value.trim();
    const phone = form.phone.value.trim();
    const user = JSON.parse(localStorage.getItem("user"));

    try {
      const res = await axios.post(
        "https://medialert-ai-3.onrender.com/api/v1/book-ambulance",
        {
          address,
          phone,
          user,
        }
      );
      alert("Ambulance booked successfully!");
      form.reset();
    } catch (error) {
      console.error(error);
      alert("Failed to book ambulance. Try again.");
    }
  };

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `https://medialert-ai-3.onrender.com/api/v1/appointments/getAppointmentDetails/${user._id}`
      );
      setUserDetail(response.data);
      console.log(response.data);
      setPastAppointments(response.data.pastAppointments || []);
      setAmbulanceAppointments(response.data.ambulanceAppointments || []);
      // setChange(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [change]);

  const rescheduleAppointments = async (e, emailId) => {
    e.preventDefault(); // Fix: call preventDefault() correctly

    try {
      // const emailId = email;
      console.log(emailId);
      const response = await axios.patch(
        `https://medialert-ai-3.onrender.com/api/v1/appointments/rescheduleAppointment/${emailId}`,
        { appointment_date: date }
      );
      console.log(response.data);
      // setChange(change + 1);
      fetchUser(); // Optional: Refresh user info
    } catch (err) {
      console.error(err);
    }
  };

  const onSend = () => {
    setChange((prev) => !prev);
    // fetchUser();
  };

  const handleDelete = (emailId) => async () => {
    try {
      const response = await axios.delete(
        `https://medialert-ai-3.onrender.com/api/v1/appointments/delete-appointment/${emailId}`
      );
      console.log(response.data);
      setChange(change + 1);
    } catch (err) {
      console.error(err);
    }
  };

  const renderMainContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">
              Welcome, {user?.firstName}!
            </h1>
            <div className="bg-white shadow-lg rounded-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Profile Image */}
              <div className="flex flex-col items-center col-span-1">
                <img
                  src={
                    user?.profileImage ||
                    "https://cdn1.vectorstock.com/i/1000x1000/63/70/team-people-icon-black-color-in-circle-round-vector-21096370.jpg"
                  }
                  alt="Profile"
                  className="w-36 h-36 rounded-full object-cover border-4 border-green-600"
                />
                <h2 className="mt-4 text-xl font-semibold text-gray-800">
                  {user?.firstName} {user?.lastName}
                </h2>
              </div>

              {/* Patient Details */}
              <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <UserCircle className="text-green-600" />
                  <p className="text-gray-700 font-medium">
                    Full Name: {user?.firstName} {user?.lastName}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-green-600" />
                  <p className="text-gray-700 font-medium">
                    Email: {user?.email}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-green-600" />
                  <p className="text-gray-700 font-medium">
                    Mobile: {user?.phone}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="text-green-600" />
                  <p className="text-gray-700 font-medium">DOB: {user?.dob}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-green-600" />
                  <p className="text-gray-700 font-medium">
                    NIC: {user?.nic || "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "book-appointment":
        return (
          <div className="p-6">
            <AccordionItem title="Book An Appointment" defaultOpen>
              <AppointmentForm userId={user?._id} onSend={onSend} />
            </AccordionItem>
          </div>
        );
      case "book-ambulance":
        return (
          <div className="p-6">
            <AccordionItem title="Book an Ambulance" defaultOpen>
              <form onSubmit={handleBookAmbulance} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium">
                    Address
                  </label>
                  <textarea
                    name="address"
                    required
                    placeholder="Enter address"
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    pattern="^\d{10}$"
                    required
                    placeholder="+91xxxxxxxxxx"
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
                >
                  Book an Ambulance
                </button>
              </form>
            </AccordionItem>
          </div>
        );
      case "appointments-history":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
              Appointments History Details
            </h2>

            <div className="max-h-[550px] overflow-y-auto rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-inner">
              {userDetail?.appointments?.length ? (
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {userDetail.appointments.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-300"
                    >
                      <h3 className="text-lg font-bold text-green-700 mb-1">
                        {item.firstName}
                      </h3>
                      <p className="text-gray-700 mb-1">
                        <span className="font-semibold text-gray-800">
                          Appointment Date:
                        </span>{" "}
                        {new Date(item.appointment_date).toLocaleDateString()}
                      </p>
                      <p className="text-gray-700 mb-1">
                        <span className="font-semibold text-gray-800">
                          Disease:
                        </span>{" "}
                        {item.department}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold text-gray-800">
                          Status:
                        </span>{" "}
                        <span
                          className={`inline-block px-2 py-0.5 rounded text-sm font-semibold ${
                            item.status === "Confirmed"
                              ? "bg-green-100 text-green-800"
                              : item.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {item.status}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-10">
                  No appointments history.
                </p>
              )}
            </div>
          </div>
        );


      case "reschedule-appointment":
        return (
          <div className="p-6">
            <AccordionItem title="Reschedule Appointment" defaultOpen>
              {userDetail?.appointments?.length ? (
                <div className="space-y-4">
                  {userDetail.appointments.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white p-4 rounded-xl shadow flex flex-col gap-2"
                    >
                      <p>
                        <strong>Doctor Name:</strong>{" "}
                        {item.doctor.firstName + " " + item.doctor.lastName}
                      </p>
                      <p>
                        <strong>Patient Name:</strong>{" "}
                        {item.firstName + " " + item.lastName}
                      </p>
                      <p>
                        <strong>Current Date:</strong>{" "}
                        {new Date(item.appointment_date).toLocaleDateString()}
                      </p>
                      <p>
                        <strong>Department:</strong>{" "}
                        <span className="text-sm font-semibold px-2 py-0.5 rounded bg-yellow-100 text-yellow-800">
                          {item.department}
                        </span>
                      </p>

                      <form
                        onSubmit={(e) => rescheduleAppointments(e, item.email)}
                        className="space-y-2"
                      >
                        <label className="block text-sm font-medium text-gray-700">
                          New Appointment Date
                        </label>
                        <input
                          type="date"
                          name="newDate"
                          required
                          className="w-full p-2 border rounded"
                          onChange={(e) => setDate(e.target.value)}
                        />
                        <button
                          type="submit"
                          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                        >
                          Reschedule
                        </button>
                      </form>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No appointments available to reschedule.</p>
              )}
            </AccordionItem>
          </div>
        );

      case "cancel-appointment":
        return (
          <div className="p-6">
            <AccordionItem title="Reschedule Appointment" defaultOpen>
              {userDetail?.appointments?.length ? (
                <div className="space-y-4">
                  {userDetail.appointments.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white p-4 rounded-xl shadow flex flex-col gap-2"
                    >
                      <p>
                        <strong>Doctor Name:</strong>{" "}
                        {item.doctor.firstName + " " + item.doctor.lastName}
                      </p>
                      <p>
                        <strong>Patient Name:</strong>{" "}
                        {item.firstName + " " + item.lastName}
                      </p>
                      <p>
                        <strong>Current Date:</strong>{" "}
                        {new Date(item.appointment_date).toLocaleDateString()}
                      </p>
                      <p>
                        <strong>Department:</strong>{" "}
                        <span className="text-sm font-semibold px-2 py-0.5 rounded bg-yellow-100 text-yellow-800">
                          {item.department}
                        </span>
                        <button
                          onClick={handleDelete(item.email)}
                          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mt-2"
                        >
                          CANCEL
                        </button>
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No appointments available to cancel.</p>
              )}
            </AccordionItem>
          </div>
        );
      case "doctor-availability":
        return <div className="p-6">Select an option from the sidebar.</div>;
      default:
        return <div className="p-6">Select an option from the sidebar.</div>;
    }
  };

  return (
    <div className="flex min-h-screen text-gray-800 font-sans bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-indigo-700 to-indigo-800 text-white hidden md:block shadow-xl">
        <div className="p-6 text-2xl font-bold border-b border-indigo-600 flex items-center gap-2">
          {/* <span className="material-icons">person</span> */}
          Patient Panel
        </div>
        <nav className="space-y-2 text-sm px-4 pt-4 font-medium">
          <button
            onClick={() => setActiveTab("dashboard")}
            className="flex w-full items-center gap-3 py-2 px-4 rounded-lg hover:bg-indigo-600 transition"
          >
            Dashboard
          </button>
          {/* <button
            onClick={() => setActiveTab("doctor-availability")}
            className="flex w-full items-center gap-3 py-2 px-4 rounded-lg hover:bg-indigo-600 transition"
          >
            Doctor Availability{" "}
          </button> */}
          <button
            onClick={() => setActiveTab("book-appointment")}
            className="flex w-full items-center gap-3 py-2 px-4 rounded-lg hover:bg-indigo-600 transition"
          >
            Book Appointment
          </button>
          <button
            onClick={() => setActiveTab("reschedule-appointment")}
            className="flex w-full items-center gap-3 py-2 px-3 rounded-lg hover:bg-indigo-600 transition"
          >
            Reschedule Appointment
          </button>
          <button
            onClick={() => setActiveTab("cancel-appointment")}
            className="flex w-full items-center gap-3 py-2 px-4 rounded-lg hover:bg-indigo-600 transition"
          >
            Cancel Appointment
          </button>
          <button
            onClick={() => setActiveTab("book-ambulance")}
            className="flex w-full items-center gap-3 py-2 px-4 rounded-lg hover:bg-indigo-600 transition"
          >
            Book Ambulance
          </button>
          <button
            onClick={() => setActiveTab("appointments-history")}
            className="flex w-full items-center gap-3 py-2 px-4 rounded-lg hover:bg-indigo-600 transition"
          >
            Appointments History
          </button>
          <a
            href="/"
            className="flex items-center gap-3 py-2 px-4 mt-10 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="bg-white shadow px-6 py-4">
          <h1 className="text-xl font-semibold">Patient Dashboard</h1>
        </header>
        <div className="flex-1 overflow-y-auto">{renderMainContent()}</div>
      </main>
    </div>
  );
};

export default PatientDashboard;
