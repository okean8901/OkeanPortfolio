export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      downloadCV: 'Download CV'
    },
    
    // Hero Section
    hero: {
      title: 'Pham Le Truong',
      subtitle: 'Software Tester | Quality Assurance | Quality Control',
      description: 'Passionate QA professional dedicated to ensuring software excellence through comprehensive testing, quality assurance processes, and continuous improvement. I specialize in manual and automated testing, defect identification, and delivering high-quality products that meet user expectations.',
      viewProjects: 'View Projects',
      getInTouch: 'Get In Touch',
      roles: ['Software Tester', 'Quality Assurance', 'Quality Control']
    },
    
    // About Section
    about: {
      title: 'About Me',
      description1: 'I\'m a Quality Assurance professional with a passion for ensuring software excellence. I specialize in identifying defects, improving testing processes, and collaborating with development teams to deliver high-quality products. My focus is on comprehensive testing strategies, test automation, and maintaining rigorous quality standards.',
      description2: 'Currently studying Software Engineering at BTEC FPT British College with hands-on experience in QA and testing methodologies. I received the Academic Achievement Award for Fall Semester 2024 in Computing! I believe in meticulous attention to detail, continuous learning, and building robust testing frameworks that ensure products meet user expectations.',
      education: 'Education',
      educationTitle: 'BTEC FPT British College – Software Engineering',
      educationPeriod: 'Mar 2023 – Present',
      achievement: '🏆 Academic Achievement Award – Fall Semester 2024 (Computing major)',
      stats: {
        yearsExperience: 'Years Experience',
        projectsCompleted: 'Projects Completed',
        technologies: 'Technologies'
      }
    },
    
    // Skills Section
    skills: {
      title: 'Technical Skills',
      subtitle: 'Here\'s what I work with',
      skillCategories: {
        testing: 'Manual Testing Methodologies',
        techniques: 'Advanced Testing Techniques',
        tools: 'QA Tools & Platforms',
        database: 'Database & SQL',
        web: 'Web Technologies',
        soft: 'Soft Skills'
      },
      skillDescriptions: {
        testing: 'Functional Testing, Regression Testing, Smoke Testing, Sanity Testing, UAT Preparation, Test Case Execution',
        techniques: 'UI/UX Testing, Logic Testing, Exploratory Testing, Boundary Value Analysis, Equivalence Partitioning',
        tools: 'Jira, Lark, Chrome DevTools, Firefox DevTools, Browser Testing, Test Documentation',
        database: 'SQL Server, MySQL, SQL Query Writing, Database Testing, Data Validation',
        web: 'HTML5, CSS3, JavaScript, API Testing, Performance Testing, Load Testing',
        soft: 'Attention to Detail, Communication, Documentation, Time Management, Team Collaboration, Analytical Thinking'
      }
    },

    // Testing & QA Section
    testingQA: {
      title: 'Manual Testing & QA Expertise',
      subtitle: 'Specialized Skills in Quality Assurance & Manual Testing',
      categories: {
        stlc: 'Software Testing Life Cycle (STLC)',
        testDesign: 'Test Case Design & Execution',
        manualTesting: 'Manual Testing Types & Techniques',
        bugManagement: 'Bug Management & Reporting',
        tools: 'Testing Tools & Platforms',
        testDataSQL: 'Test Data & SQL',
        softSkills: 'QA Soft Skills'
      },
      details: {
        stlc: 'Complete STLC Process | Requirements Analysis & Test Planning | Test Case Development | Test Execution | Defect Reporting | UAT Support',
        testDesign: 'Test Case Design (Positive & Negative Scenarios) | Boundary Value Analysis | Equivalence Partitioning | Test Data Preparation | Test Execution Tracking',
        manualTesting: 'Functional Testing | UI/UX Testing | Logic Testing | Regression Testing | Smoke Testing | Sanity Testing | Exploratory Testing | User Acceptance Testing (UAT)',
        bugManagement: 'Bug Detection & Documentation (Clear Steps, Expected vs Actual Results) | Bug Severity & Priority Assessment | Bug Tracking & Status Updates | Root Cause Analysis | Dev Collaboration & Verification',
        tools: 'Jira - Defect & Test Case Management | Lark - Team Communication & Collaboration | Chrome DevTools | Firefox DevTools | Test Case Documentation Tools',
        testDataSQL: 'SQL Query Writing for Test Data Preparation | Database Testing & Validation | Data Integrity Verification | Direct Database Queries for Testing',
        softSkills: 'Strong Logical & Analytical Thinking | Exceptional Attention to Detail | Excellent Communication & Collaboration | Proactive Learning Mindset | Problem-Solving Ability | Patience & Persistence | Independent Work Capability'
      }
    },
    
    // Projects Section
    projects: {
      title: 'My Projects',
      subtitle: 'Here are some things I\'ve been working on',
      viewProject: 'View Project',
      viewCode: 'View Code',
      filters: {
        all: 'All',
        web: 'Web',
        portfolio: 'Portfolio',
        ai: 'AI',
        ecommerce: 'E-commerce',
        chat: 'Chat & Real-time'
      },
      projectDetails: {
        duration: 'Duration',
        role: 'Role'
      },
      projects: {
        portfolio: {
          title: 'Personal Portfolio Website',
          description: 'Portfolio website built with React. Features: multilingual support (English/Vietnamese), responsive design, interactive animations.'
        },
        aiCV: {
          title: 'AI CV Analysis System',
          description: 'Resume analysis platform using Azure AI Services. Analyzes CVs and provides feedback for job applications.'
        },
        ecommerce: {
          title: 'Okean Mobile – E-commerce Platform',
          description: 'E-commerce platform with AI-powered product recommendations and secure payment integration.'
        },
        sims: {
          title: 'Student Information Management System',
          description: 'System for managing student data, courses, and enrollments. Includes role-based access control for students, teachers, and admins.'
        },
        anime: {
          title: 'Okean AnimeMovie',
          description: 'ASP.NET Core MVC anime viewing web application: browse anime, watch episodes, comment, favorite, trend and manage content. Optimized performance, clear UI and easy to extend.'
        },
        okeanchat: {
          title: 'OkeanChat – Real-time Chat & Video Call',
          description: 'Real-time chat and video call application built with ASP.NET Core 8 and SignalR, supporting public/private messaging, friend management, P2P and group calls via WebRTC'

        }
      }
    },
    
    // CV Section
    cv: {
      title: 'My Resume',
      subtitle: 'View my detailed resume'
    },
    
    // Contact Section
    contact: {
      title: 'Get In Touch',
      subtitle: 'Want to work together or just chat? Drop me a message!',
      name: 'Your Name',
      email: 'Your Email',
      message: 'Your Message',
      sendMessage: 'Send Message',
      sending: 'Sending...',
      contactInfo: 'Contact Information',
      location: 'Ha Noi City, Vietnam',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      githubLabel: 'GitHub',
      downloadCV: 'Download My CV',
      downloadCVSubtitle: 'Want to know more? Check out my full CV',
      downloadCVBtn: 'Download CV',
      notifications: {
        fillFields: 'Please fill in all fields',
        validEmail: 'Please enter a valid email address',
        success: 'Thanks for reaching out! I\'ll get back to you soon.'
      }
    },
    
    // Footer
    footer: {
      copyright: '© 2024 Pham Le Truong. All rights reserved.',
      madeWith: 'Made with ❤️ by Pham Le Truong'
    },
    
    // Language Toggle
    language: {
      toggle: 'Language',
      english: 'English',
      vietnamese: 'Tiếng Việt'
    }
  },
  
  vi: {
    // Navigation
    nav: {
      home: 'Trang chủ',
      about: 'Giới thiệu',
      skills: 'Kỹ năng',
      projects: 'Dự án',
      contact: 'Liên hệ',
      downloadCV: 'Tải CV'
    },
    
    // Hero Section
    hero: {
      title: 'Phạm Lê Trường',
      subtitle: 'Software Tester | Quality Assurance | Quality Control',
      description: 'Chuyên gia QA đam mê đảm bảo chất lượng phần mềm thông qua kiểm thử toàn diện, quy trình đảm bảo chất lượng và cải tiến liên tục. Mình chuyên về kiểm thử thủ công và tự động, xác định lỗi, và cung cấp sản phẩm chất lượng cao đáp ứng kỳ vọng của người dùng.',
      viewProjects: 'Xem Dự án',
      getInTouch: 'Liên hệ',
      roles: ['Software Tester', 'Quality Assurance', 'Quality Control']
    },
    
    // About Section
    about: {
      title: 'Giới thiệu',
      description1: 'Mình là chuyên gia Quality Assurance đam mê đảm bảo chất lượng phần mềm xuất sắc. Mình chuyên về xác định lỗi, cải tiến quy trình kiểm thử, và hợp tác với các nhóm phát triển để cung cấp sản phẩm chất lượng cao. Trọng tâm của mình là các chiến lược kiểm thử toàn diện, tự động hóa kiểm thử, và duy trì tiêu chuẩn chất lượng nghiêm ngặt.',
      description2: 'Hiện đang học Kỹ sư Phần mềm tại BTEC FPT British College với kinh nghiệm thực tế về QA và các phương pháp kiểm thử. Mình vừa nhận được Giải thưởng Thành tích Học tập cho Học kỳ Thu 2024 trong chuyên ngành Computing! Mình tin vào sự chú ý đến chi tiết, học tập liên tục, và xây dựng các khung kiểm thử mạnh mẽ để đảm bảo sản phẩm đáp ứng kỳ vọng của người dùng.',
      education: 'Học vấn',
      educationTitle: 'BTEC FPT British College – Kỹ sư Phần mềm',
      educationPeriod: 'Tháng 3/2023 – Hiện tại',
      achievement: '🏆 Giải thưởng Thành tích Học tập – Học kỳ Thu 2024 (Chuyên ngành Computing)',
      stats: {
        yearsExperience: 'Năm Kinh nghiệm',
        projectsCompleted: 'Dự án Hoàn thành',
        technologies: 'Công nghệ'
      }
    },
    
    // Skills Section
    skills: {
      title: 'Kỹ năng Kỹ thuật',
      subtitle: 'Đây là những gì mình thường dùng',
      skillCategories: {
        testing: 'Phương pháp Kiểm thử Thủ công',
        techniques: 'Kỹ thuật Kiểm thử Nâng cao',
        tools: 'Công cụ & Nền tảng QA',
        database: 'Cơ sở Dữ liệu & SQL',
        web: 'Công nghệ Web',
        soft: 'Kỹ năng Mềm'
      },
      skillDescriptions: {
        testing: 'Kiểm thử Chức năng, Kiểm thử Hồi quy, Kiểm thử Khói, Kiểm thử Vệ sinh, Chuẩn bị UAT, Thực thi Test Case',
        techniques: 'Kiểm thử UI/UX, Kiểm thử Logic, Kiểm thử Khám phá, Phân tích Giá trị Biên, Phân hoạch Tương đương',
        tools: 'Jira, Lark, Chrome DevTools, Firefox DevTools, Kiểm thử Trình duyệt, Tài liệu Kiểm thử',
        database: 'SQL Server, MySQL, Viết Truy vấn SQL, Kiểm thử Cơ sở Dữ liệu, Xác thực Dữ liệu',
        web: 'HTML5, CSS3, JavaScript, Kiểm thử API, Kiểm thử Hiệu suất, Kiểm thử Tải',
        soft: 'Chú ý Chi tiết, Giao tiếp, Tài liệu hóa, Quản lý Thời gian, Hợp tác Nhóm, Tư duy Phân tích'
      }
    },

    // Testing & QA Section
    testingQA: {
      title: 'Chuyên môn Kiểm thử Thủ công & QA',
      subtitle: 'Kỹ năng chuyên sâu trong Đảm bảo Chất lượng & Kiểm thử Thủ công',
      categories: {
        stlc: 'Quy trình Kiểm thử Phần mềm (STLC)',
        testDesign: 'Thiết kế & Thực thi Test Case',
        manualTesting: 'Loại & Kỹ thuật Kiểm thử Thủ công',
        bugManagement: 'Quản lý & Báo cáo Bug',
        tools: 'Công cụ & Nền tảng Kiểm thử',
        testDataSQL: 'Dữ liệu Kiểm thử & SQL',
        softSkills: 'Kỹ năng Mềm QA'
      },
      details: {
        stlc: 'Quy trình STLC Hoàn chỉnh | Phân tích Yêu cầu & Lập kế hoạch Kiểm thử | Phát triển Test Case | Thực thi Kiểm thử | Báo cáo Lỗi | Hỗ trợ UAT',
        testDesign: 'Thiết kế Test Case (Kịch bản Dương & Âm) | Phân tích Giá trị Biên | Phân hoạch Tương đương | Chuẩn bị Dữ liệu Kiểm thử | Theo dõi Thực thi',
        manualTesting: 'Kiểm thử Chức năng | Kiểm thử UI/UX | Kiểm thử Logic | Kiểm thử Hồi quy | Kiểm thử Khói | Kiểm thử Vệ sinh | Kiểm thử Khám phá | Kiểm thử Chấp nhận Người dùng (UAT)',
        bugManagement: 'Phát hiện & Mô tả Bug Rõ ràng (Steps, Expected vs Actual Results) | Đánh giá Mức độ Nghiêm trọng & Ưu tiên | Theo dõi & Cập nhật Trạng thái Bug | Phân tích Nguyên nhân | Hợp tác Dev & Xác thực',
        tools: 'Jira - Quản lý Lỗi & Test Case | Lark - Giao tiếp & Hợp tác Nhóm | Chrome DevTools | Firefox DevTools | Công cụ Tài liệu Hóa Test Case',
        testDataSQL: 'Viết Truy vấn SQL để Chuẩn bị Dữ liệu Kiểm thử | Kiểm thử & Xác thực Cơ sở Dữ liệu | Xác thực Tính toàn vẹn Dữ liệu | Truy vấn Trực tiếp Cơ sở Dữ liệu để Kiểm thử',
        softSkills: 'Tư duy Logic & Phân tích Mạnh | Chú ý Chi tiết Xuất sắc | Giao tiếp & Hợp tác Xuất sắc | Tinh thần Học hỏi Chủ động | Khả năng Giải quyết Vấn đề | Kiên nhẫn & Bền bỉ | Khả năng Làm việc Độc lập'
      }
    },
    
    // Projects Section
    projects: {
      title: 'Dự án của tôi',
      subtitle: 'Đây là một số thứ mình đã làm gần đây',
      viewProject: 'Xem Dự án',
      viewCode: 'Xem Mã nguồn',
      filters: {
        all: 'Tất cả',
        web: 'Web',
        portfolio: 'Portfolio',
        ai: 'AI',
        ecommerce: 'Thương mại điện tử',
        chat: 'Chat & Thời gian Thực'
      },
      projectDetails: {
        duration: 'Thời gian',
        role: 'Vai trò'
      },
      projects: {
        portfolio: {
          title: 'Website Portfolio Cá nhân',
          description: 'Website portfolio xây dựng bằng React. Tính năng: hỗ trợ đa ngôn ngữ (Tiếng Anh/Tiếng Việt), thiết kế responsive, hiệu ứng tương tác.'
        },
        aiCV: {
          title: 'Hệ thống Phân tích CV bằng AI',
          description: 'Nền tảng phân tích CV sử dụng Azure AI Services. Phân tích CV và đưa ra phản hồi cho việc ứng tuyển.'
        },
        ecommerce: {
          title: 'Okean Mobile – Nền tảng Thương mại điện tử',
          description: 'Nền tảng thương mại điện tử với tính năng gợi ý sản phẩm bằng AI và tích hợp thanh toán bảo mật.'
        },
        sims: {
          title: 'Hệ thống Quản lý Thông tin Sinh viên',
          description: 'Hệ thống quản lý dữ liệu sinh viên, khóa học và đăng ký. Có kiểm soát truy cập dựa trên vai trò cho sinh viên, giáo viên và admin.'
        },
        anime: {
          title: 'Okean AnimeMovie',
          description: 'Ứng dụng web xem anime ASP.NET Core MVC: duyệt anime, xem tập, bình luận, yêu thích, xu hướng và quản lý nội dung. Hiệu suất tối ưu, giao diện rõ ràng và dễ mở rộng.'
        },
        okeanchat: {
          title: 'OkeanChat – Chat & Video Call Thời gian Thực',
          description: 'Ứng dụng chat và video call thời gian thực xây dựng bằng ASP.NET Core 8 và SignalR, hỗ trợ tin nhắn công khai/riêng tư, quản lý bạn bè, cuộc gọi P2P và nhóm qua WebRTC'

        }
      }
    },
    
    // CV Section
    cv: {
      title: 'Hồ sơ của tôi',
      subtitle: 'Xem CV chi tiết của mình'
    },
    
    // Contact Section
    contact: {
      title: 'Liên hệ',
      subtitle: 'Muốn làm việc cùng nhau hay chỉ đơn giản là trò chuyện? Gửi tin nhắn cho mình nhé!',
      name: 'Tên của bạn',
      email: 'Email của bạn',
      message: 'Tin nhắn của bạn',
      sendMessage: 'Gửi tin nhắn',
      sending: 'Đang gửi...',
      contactInfo: 'Thông tin Liên hệ',
      location: 'Thành phố Hà Nội, Việt Nam',
      emailLabel: 'Email',
      phoneLabel: 'Điện thoại',
      githubLabel: 'GitHub',
      downloadCV: 'Tải CV của tôi',
      downloadCVSubtitle: 'Muốn biết thêm? Xem CV đầy đủ của mình nhé',
      downloadCVBtn: 'Tải CV',
      notifications: {
        fillFields: 'Vui lòng điền đầy đủ tất cả các trường',
        validEmail: 'Vui lòng nhập địa chỉ email hợp lệ',
        success: 'Cảm ơn bạn đã liên hệ! Mình sẽ phản hồi lại sớm nhất có thể.'
      }
    },
    
    // Footer
    footer: {
      copyright: '© 2024 Pham Le Truong. Tất cả quyền được bảo lưu.',
      madeWith: 'Được làm với ❤️ bởi Pham Le Truong'
    },
    
    // Language Toggle
    language: {
      toggle: 'Ngôn ngữ',
      english: 'English',
      vietnamese: 'Tiếng Việt'
    }
  }
};
