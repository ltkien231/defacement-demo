-- Create database if not exists
CREATE DATABASE IF NOT EXISTS university_db;
USE university_db;

-- Create programs table
CREATE TABLE IF NOT EXISTS programs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create students table
CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO programs (title, description, image_url) VALUES
('Computer Science', 'Explore cutting-edge technology and innovation in our CS program.', 'https://images.unsplash.com/photo-1528901166007-3784c7dd3653?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Business Administration', 'Develop leadership skills and business acumen for the modern world.', 'https://plus.unsplash.com/premium_photo-1661274189734-90d6aa7eb010?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Engineering', 'Build the future with our comprehensive engineering programs.', 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3'); 

-- https://images.unsplash.com/photo-1635929114944-8bab23b98e74?q=80&w=3334&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D