
import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  UserCircle,
  Mail,
  Stethoscope,
  CalendarDays,
  Users,
  FileText,
  Phone,
  MapPin,
  Medal,
  Star,
  LayoutDashboard,
  CalendarCheck,
  ClipboardList,
  Clock,
  LogOut,
} from "lucide-react";

const DoctorDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [appointments, setAppointments] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user.docImage);

  const [dashboardStats, setDashboardStats] = useState({});

  const [isModalOpen, setIsModalOpen] = useState(false);
  const doctor = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchAppointments = async () => {
      if (!doctor?._id) return;
      try {
        const response = await axios.get(
          `https://medialert-ai-3.onrender.com/api/v1/appointments/getAppointmentsByDoctor/${doctor._id}`
        );
        setAppointments(response.data.appointments || []);
      } catch (error) {
        console.error("Failed to fetch appointments:", error);
      }
    };

    fetchAppointments();
  }, [doctor?._id]);

  // Fetch Appointments
  useEffect(() => {
    const fetchAppointments = async () => {
      if (!user?._id) return;
      try {
        const response = await axios.get(
          `https://medialert-ai-3.onrender.com/v1/appointments/getAppointmentsByDoctor/${user._id}`
        );
        setAppointments(response.data.appointments || []);
      } catch (error) {
        console.error("Failed to fetch appointments:", error);
      }
    };

    fetchAppointments();
  }, [user?._id]);

  useEffect(() => {
    const fetchDashboardStats = async () => {
      if (!user?._id) return;
      try {
        // const response = await axios.get(
        //   `http://localhost:3030/api/v1/dashboard/doctor/${user._id}`
        // );
        const response = await axios.get(
          `https://medialert-ai-3.onrender.com/api/v1/user/dashboard/doctor/${user._id}`
        );
        setDashboardStats(response.data);

        setDashboardStats(response.data);
      } catch (error) {
        console.error("Failed to fetch dashboard stats:", error);
      }
    };

    fetchDashboardStats();
  }, [user?._id]);

  // console

  const handleViewPatient = async (patientId) => {
    console.log("Patient ID:", patientId); // Ensure you're passing a valid ID
    try {
      // Use patientId._id to make the API call
      const response = await axios.get(
        `https://medialert-ai-3.onrender.com/api/v1/user/${patientId}`
      );
      setSelectedPatient(response.data.user); // Set the patient details in state
      setIsModalOpen(true); // Open the modal with patient details
    } catch (error) {
      console.error("Failed to fetch patient details:", error);
    }
  };

  // const getUpcomingAppointments = () => {
  //   const now = new Date();
  //   return appointments.filter(
  //     (appt) => new Date(appt.appointment_date) >= now && appt.status === "Confirmed"
  //   );
  // };

  // Upcoming appointments - after today
  // const upcomingAppointments = appointments.filter(appointment => {
  //   const today = new Date();
  //   const appointmentDate = new Date(appointment.date);
  //   return appointmentDate > today;
  // });

  const renderMainContent = () => {
    switch (activeTab) {
      case "dashboard":
   
        return (
          <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Doctor Profile */}
            <div className="bg-white p-6 rounded-2xl shadow-xl text-center flex flex-col items-center">
              <img
                src={user?.docImage.url || "https://via.placeholder.com/150"}
                alt="Doctor"
                className="w-32 h-32 rounded-full object-cover mb-4 shadow-md border-4 border-blue-200"
              />
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <UserCircle className="w-6 h-6 text-blue-500" />{" "}
                {user?.firstName} {user?.lastName}
              </h2>
              <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                <Mail className="w-4 h-4" /> {user?.email}
              </p>
              <div className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 mt-2 rounded-full inline-flex items-center gap-1">
                <Stethoscope className="w-4 h-4" /> {user?.doctorDepartment}
              </div>

              <div className="mt-6 w-full text-left space-y-3 text-gray-600">
                <p className="flex items-center gap-2">
                  <Medal className="w-4 h-4 text-green-500" />
                  <span>
                    <strong>Experience:</strong> 8 Years
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-purple-500" />
                  <span>
                    <strong>Specialization:</strong> {user?.doctorDepartment}
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-yellow-600" />
                  <span>
                    <strong>Phone:</strong> {user?.phone}
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-400" />
                  <span>
                    <strong>Location:</strong> Delhi, India
                  </span>
                </p>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-1">Rating</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < 4
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">(4.0)</span>
                </div>
              </div>
            </div>

            {/* Dashboard Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-green-400 to-green-600 p-6 rounded-2xl shadow-xl text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm">Total Appointments</p>
                    <h2 className="text-3xl font-bold mt-1">
                      {dashboardStats.totalAppointments || 0}
                    </h2>
                  </div>
                  <CalendarDays className="w-10 h-10 opacity-80" />
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-2xl shadow-xl text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm">Patients Treated</p>
                    <h2 className="text-3xl font-bold mt-1">
                      {dashboardStats.patientsTreated || 0}
                    </h2>
                  </div>
                  <Users className="w-10 h-10 opacity-80" />
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-6 rounded-2xl shadow-xl text-white sm:col-span-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm">Today’s Appointments</p>
                    <h2 className="text-3xl font-bold mt-1">
                      {dashboardStats.todayAppointments || 0}
                    </h2>
                  </div>
                  <CalendarDays className="w-10 h-10 opacity-80" />
                </div>
              </div>
            </div>
          </div>
        );

      case "appointments":
        const uniqueAppointment = [];
        const seenEmail = new Set();

        appointments.forEach((appointment) => {
          const email = appointment.email || appointment?.patientId?.email;
          if (email && !seenEmail.has(email)) {
            seenEmail.add(email);
            uniqueAppointment.push(appointment);
          }
        });

        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
              Appointments History
            </h2>

            <div className="max-h-[550px] overflow-y-auto rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-inner">
              {uniqueAppointment.length ? (
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {uniqueAppointment.map((appt, i) => (
                    <div
                      key={i}
                      className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-300"
                    >
                      <h3 className="text-lg font-bold text-green-700 mb-1">
                        {appt.firstName} {appt.lastName}
                      </h3>
                      <p className="text-gray-700 mb-1">
                        <span className="font-semibold text-gray-800">
                          Date:
                        </span>{" "}
                        {new Date(appt.appointment_date).toLocaleDateString()}
                      </p>
                      <p className="text-gray-700 mb-1">
                        <span className="font-semibold text-gray-800">
                          Department:
                        </span>{" "}
                        {appt.department}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold text-gray-800">
                          Status:
                        </span>{" "}
                        <span
                          className={`inline-block px-2 py-0.5 rounded text-sm font-semibold ${
                            appt.status === "Confirmed"
                              ? "bg-green-100 text-green-800"
                              : appt.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {appt.status}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-10">
                  No appointments found.
                </p>
              )}
            </div>
          </div>
        );

      case "patients":
        const uniqueAppointments = [];
        const seenEmails = new Set();

        appointments.forEach((appointment) => {
          const email = appointment.email || appointment?.patientId?.email;
          if (email && !seenEmails.has(email)) {
            seenEmails.add(email);
            uniqueAppointments.push(appointment);
          }
        });
        // This now has only unique patients based on email

        const allPatients = uniqueAppointments;

        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
              Patient Records
            </h2>

            <div className="max-h-[550px] overflow-y-auto rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-inner">
              {allPatients.length ? (
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {allPatients.map((patient) => (
                    <div
                      key={patient._id}
                      className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-300"
                    >
                      <h3 className="text-lg font-bold text-green-700 mb-1">
                        {patient.firstName} {patient.lastName}
                      </h3>
                      <p className="text-gray-700 mb-1">
                        <span className="font-semibold text-gray-800">
                          Email:
                        </span>{" "}
                        {patient.email}
                      </p>
                      <p className="text-gray-700 mb-1">
                        <span className="font-semibold text-gray-800">
                          Phone:
                        </span>{" "}
                        {patient.phone}
                      </p>
                      <p className="text-gray-700 mb-1">
                        <span className="font-semibold text-gray-800">
                          DOB:
                        </span>{" "}
                        {new Date(patient.dob).toLocaleDateString()}
                      </p>
                      <p className="text-gray-700 mb-2">
                        <span className="font-semibold text-gray-800">
                          Gender:
                        </span>{" "}
                        {patient.gender}
                      </p>
                      <button
                        onClick={() => handleViewPatient(patient._id)}
                        className="mt-2 px-4 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
                      >
                        View
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-10">
                  No patient records found.
                </p>
              )}
            </div>
          </div>
        );

      case "current appointment":
        const today = new Date().toISOString().split("T")[0]; // "YYYY-MM-DD"

        const uniqueAppointmentCurr = [];
        const seenEmailCurr = new Set();

        appointments.forEach((appointment) => {
          const apptDate = new Date(appointment.appointment_date)
            .toISOString()
            .split("T")[0];
          const email = appointment.email || appointment?.patientId?.email;

          if (apptDate === today && email && !seenEmailCurr.has(email)) {
            seenEmailCurr.add(email);
            uniqueAppointmentCurr.push(appointment);
          }
        });

        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
              Today’s Appointments
            </h2>

            <div className="max-h-[550px] overflow-y-auto rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-inner">
              {uniqueAppointmentCurr.length ? (
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {uniqueAppointmentCurr.map((appt, i) => (
                    <div
                      key={i}
                      className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-300"
                    >
                      <h3 className="text-lg font-bold text-green-700 mb-1">
                        {appt.firstName} {appt.lastName}
                      </h3>
                      <p className="text-gray-700 mb-1">
                        <span className="font-semibold text-gray-800">
                          Date:
                        </span>{" "}
                        {new Date(appt.appointment_date).toLocaleDateString()}
                      </p>
                      <p className="text-gray-700 mb-1">
                        <span className="font-semibold text-gray-800">
                          Department:
                        </span>{" "}
                        {appt.department}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold text-gray-800">
                          Status:
                        </span>{" "}
                        <span
                          className={`inline-block px-2 py-0.5 rounded text-sm font-semibold ${
                            appt.status === "Confirmed"
                              ? "bg-green-100 text-green-800"
                              : appt.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {appt.status}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-10">
                  No appointments scheduled for today.
                </p>
              )}
            </div>
          </div>
        );

      case "upcoming appointment":
        const upcoming = new Date().toISOString().split("T")[0]; // "YYYY-MM-DD"

        const uniqueUpcomingAppointmentCurr = [];
        const seenEmailUpcoming = new Set();

        appointments.forEach((appointment) => {
          const apptDate = new Date(appointment.appointment_date)
            .toISOString()
            .split("T")[0];
          const email = appointment.email || appointment?.patientId?.email;

          if (apptDate > upcoming && email && !seenEmailUpcoming.has(email)) {
            seenEmailUpcoming.add(email);
            uniqueUpcomingAppointmentCurr.push(appointment);
          }
        });
        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
              Upcoming Appointments
            </h2>

            <div className="max-h-[550px] overflow-y-auto rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-inner">
              {uniqueUpcomingAppointmentCurr.length ? (
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {uniqueUpcomingAppointmentCurr.map((appt, i) => (
                    <div
                      key={i}
                      className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-300"
                    >
                      <h3 className="text-lg font-bold text-green-700 mb-1">
                        {appt.firstName} {appt.lastName}
                      </h3>
                      <p className="text-gray-700 mb-1">
                        <span className="font-semibold text-gray-800">
                          Date:
                        </span>{" "}
                        {new Date(appt.appointment_date).toLocaleDateString()}
                      </p>
                      <p className="text-gray-700 mb-1">
                        <span className="font-semibold text-gray-800">
                          Department:
                        </span>{" "}
                        {appt.department}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold text-gray-800">
                          Status:
                        </span>{" "}
                        <span
                          className={`inline-block px-2 py-0.5 rounded text-sm font-semibold ${
                            appt.status === "Confirmed"
                              ? "bg-green-100 text-green-800"
                              : appt.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {appt.status}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-10">
                  No appointments scheduled for upcoming days.
                </p>
              )}
            </div>
          </div>
        );
      default:
        return <div className="p-6">Select an option from the sidebar.</div>;
    }
  };

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 h-screen bg-green-700 text-white hidden md:flex flex-col flex-shrink-0">
        <div className="p-6 text-2xl font-bold border-b border-green-600">
          Doctor Panel
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 text-sm">
          <button
            onClick={() => setActiveTab("dashboard")}
            className="flex items-center gap-3 w-full text-left py-2 px-4 rounded hover:bg-green-600 transition-colors"
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </button>

          <button
            onClick={() => setActiveTab("current appointment")}
            className="flex items-center gap-3 w-full text-left py-2 px-4 rounded hover:bg-green-600 transition-colors"
          >
            <ClipboardList className="w-5 h-5" />
            Current Appointment
          </button>

          <button
            onClick={() => setActiveTab("patients")}
            className="flex items-center gap-3 w-full text-left py-2 px-4 rounded hover:bg-green-600 transition-colors"
          >
            <Users className="w-5 h-5" />
            Patient Records
          </button>

          <button
            onClick={() => setActiveTab("upcoming appointment")}
            className="flex items-center gap-3 w-full text-left py-2 px-4 rounded hover:bg-green-600 transition-colors"
          >
            <Clock className="w-5 h-5" />
            Upcoming Appointment
          </button>

          <button
            onClick={() => setActiveTab("appointments")}
            className="flex items-center gap-3 w-full text-left py-2 px-4 rounded hover:bg-green-600 transition-colors"
          >
            <CalendarCheck className="w-5 h-5" />
            Appointments History
          </button>
        </nav>

        <div className="px-4 pb-6 mt-auto">
          <a
            href="/"
            className="flex items-center gap-3 w-full py-2 px-4 rounded hover:bg-red-600 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-green-700">
            Doctor Dashboard
          </h1>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-700">
              Welcome, Dr. {doctor?.firstName}
            </span>
            <img
              src={ doctor?.docImage.url || "https://i.pravatar.cc/40?img=12"}
              alt="Doctor Avatar"
              className="rounded-full w-8 h-8"
            />
          </div>
        </header>

        <main className="flex-1 bg-gray-100">{renderMainContent()}</main>
      </div>

      {/* Patient Detail Modal */}
      {isModalOpen && selectedPatient && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-md">
            <h2 className="text-xl font-bold mb-4 text-green-700">
              Patient Details
            </h2>
            <p>
              <strong>Name:</strong> {selectedPatient.firstName}{" "}
              {selectedPatient.lastName}
            </p>
            <p>
              <strong>Email:</strong> {selectedPatient.email}
            </p>
            <p>
              <strong>Phone:</strong> {selectedPatient.phone}
            </p>
            <p>
              <strong>DOB:</strong>{" "}
              {new Date(selectedPatient.dob).toLocaleDateString()}
            </p>
            <p>
              <strong>Gender:</strong> {selectedPatient.gender}
            </p>
            <p>
              <strong>NIC:</strong> {selectedPatient.nic}
            </p>
            <p>
              <strong>Address:</strong> {selectedPatient.address}
            </p>
            {/* Add more fields if available */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-4 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorDashboard;
