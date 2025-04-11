-- Create users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    mobile VARCHAR(15) CHECK (mobile ~ '^\+?[0-9]{10,15}$'),
    linkedin_url TEXT,
    password_hash TEXT NOT NULL,
    role VARCHAR(20) CHECK (role IN ('interviewer', 'interviewee')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);