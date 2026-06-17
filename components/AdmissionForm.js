import { useState } from 'react';

const classes = [
  'Nursery', 'LKG', 'UKG',
  ...Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`),
];

const AdmissionForm = () => {
  const [form, setForm] = useState({
    studentName: '',
    dob: '',
    gender: '',
    classApplying: '',
    previousSchool: '',
    parentName: '',
    relation: '',
    mobile: '',
    sameWhatsApp: true,
    whatsapp: '',
    email: '',
    address: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const set = (field) => (e) =>
    setForm((prev) => ({
      ...prev,
      [field]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    }));

  const validate = () => {
    const errs = {};
    if (!form.studentName.trim()) errs.studentName = 'Required';
    if (!form.dob) errs.dob = 'Required';
    if (!form.gender) errs.gender = 'Required';
    if (!form.classApplying) errs.classApplying = 'Required';
    if (!form.parentName.trim()) errs.parentName = 'Required';
    if (!form.relation) errs.relation = 'Required';
    if (!/^\d{10}$/.test(form.mobile)) errs.mobile = 'Enter a valid 10-digit number';
    if (!form.sameWhatsApp && !/^\d{10}$/.test(form.whatsapp))
      errs.whatsapp = 'Enter a valid 10-digit number';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'Enter a valid email';
    if (!form.address.trim()) errs.address = 'Required';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus('loading');

    try {
      const res = await fetch('/api/admission', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          whatsapp: form.sameWhatsApp ? form.mobile : form.whatsapp,
        }),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="max-w-2xl mx-auto text-center py-12 px-6">
        <div className="bg-white rounded-2xl shadow-lg p-10 border border-[#64B6AC]">
          <div className="w-16 h-16 bg-[#64B6AC] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Thank you for applying to VNC Public School. We have received your application
            and will contact you on your registered mobile number shortly.
          </p>
        </div>
      </div>
    );
  }

  const inputCls = (field) =>
    `w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#64B6AC] transition ${
      errors[field] ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
    }`;

  const Label = ({ children, required }) => (
    <label className="block text-sm font-semibold text-gray-700 mb-1">
      {children}{required && <span className="text-red-500 ml-0.5">*</span>}
    </label>
  );

  const Err = ({ field }) =>
    errors[field] ? (
      <p className="text-red-500 text-xs mt-1">{errors[field]}</p>
    ) : null;

  const SectionTitle = ({ children }) => (
    <h3 className="text-sm font-bold text-[#64B6AC] uppercase tracking-widest mb-3 pb-1 border-b border-[#64B6AC]/30">
      {children}
    </h3>
  );

  return (
    <div className="max-w-2xl mx-auto px-4 pb-8">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Admission Form</h2>
          <p className="text-sm text-gray-400 mt-1">Session 2025-26 &nbsp;·&nbsp; All fields marked <span className="text-red-500">*</span> are required</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>

          {/* Student Information */}
          <div className="mb-7">
            <SectionTitle>Student Information</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <Label required>Student's Full Name</Label>
                <input
                  type="text"
                  value={form.studentName}
                  onChange={set('studentName')}
                  className={inputCls('studentName')}
                  placeholder="As per birth certificate"
                />
                <Err field="studentName" />
              </div>
              <div>
                <Label required>Date of Birth</Label>
                <input
                  type="date"
                  value={form.dob}
                  onChange={set('dob')}
                  className={inputCls('dob')}
                  max={new Date().toISOString().split('T')[0]}
                />
                <Err field="dob" />
              </div>
              <div>
                <Label required>Gender</Label>
                <div className="flex gap-6 mt-2.5">
                  {['Boy', 'Girl'].map((g) => (
                    <label key={g} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                      <input
                        type="radio"
                        name="gender"
                        value={g}
                        checked={form.gender === g}
                        onChange={set('gender')}
                        className="accent-[#64B6AC] w-4 h-4"
                      />
                      {g}
                    </label>
                  ))}
                </div>
                <Err field="gender" />
              </div>
              <div>
                <Label required>Class Applying For</Label>
                <select
                  value={form.classApplying}
                  onChange={set('classApplying')}
                  className={inputCls('classApplying')}
                >
                  <option value="">Select class</option>
                  {classes.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <Err field="classApplying" />
              </div>
              <div>
                <Label>Previous School</Label>
                <input
                  type="text"
                  value={form.previousSchool}
                  onChange={set('previousSchool')}
                  className={inputCls('previousSchool')}
                  placeholder="Leave blank if none"
                />
              </div>
            </div>
          </div>

          {/* Parent / Guardian */}
          <div className="mb-7">
            <SectionTitle>Parent / Guardian Information</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label required>Full Name</Label>
                <input
                  type="text"
                  value={form.parentName}
                  onChange={set('parentName')}
                  className={inputCls('parentName')}
                />
                <Err field="parentName" />
              </div>
              <div>
                <Label required>Relation to Student</Label>
                <select
                  value={form.relation}
                  onChange={set('relation')}
                  className={inputCls('relation')}
                >
                  <option value="">Select</option>
                  <option>Father</option>
                  <option>Mother</option>
                  <option>Guardian</option>
                </select>
                <Err field="relation" />
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="mb-7">
            <SectionTitle>Contact Details</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label required>Mobile Number</Label>
                <input
                  type="tel"
                  value={form.mobile}
                  onChange={set('mobile')}
                  className={inputCls('mobile')}
                  placeholder="10-digit number"
                  maxLength={10}
                />
                <Err field="mobile" />
              </div>
              <div>
                <Label>Email Address</Label>
                <input
                  type="email"
                  value={form.email}
                  onChange={set('email')}
                  className={inputCls('email')}
                  placeholder="Optional"
                />
                <Err field="email" />
              </div>
              <div className="sm:col-span-2">
                <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={form.sameWhatsApp}
                    onChange={set('sameWhatsApp')}
                    className="accent-[#64B6AC] w-4 h-4"
                  />
                  WhatsApp number is same as mobile
                </label>
              </div>
              {!form.sameWhatsApp && (
                <div>
                  <Label required>WhatsApp Number</Label>
                  <input
                    type="tel"
                    value={form.whatsapp}
                    onChange={set('whatsapp')}
                    className={inputCls('whatsapp')}
                    placeholder="10-digit number"
                    maxLength={10}
                  />
                  <Err field="whatsapp" />
                </div>
              )}
            </div>
          </div>

          {/* Address */}
          <div className="mb-7">
            <SectionTitle>Address</SectionTitle>
            <Label required>Full Residential Address</Label>
            <textarea
              value={form.address}
              onChange={set('address')}
              className={`${inputCls('address')} resize-none`}
              rows={3}
              placeholder="House No., Street, Village/Town, District, State, PIN"
            />
            <Err field="address" />
          </div>

          {status === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-5 text-sm text-red-600 text-center">
              Something went wrong. Please try again or call us at +91 7054858403.
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-[#64B6AC] hover:bg-[#4a9990] text-white font-bold py-3 rounded-lg transition-colors duration-200 disabled:opacity-60 text-base"
          >
            {status === 'loading' ? 'Submitting…' : 'Submit Application'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;
