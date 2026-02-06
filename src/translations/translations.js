export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      certifications: 'Certifications',
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
      description2: 'Software Engineering graduate from BTEC FPT British College with hands-on experience in QA and testing methodologies. I received the Academic Achievement Award for Fall Semester 2024 in Computing! I believe in meticulous attention to detail, continuous learning, and building robust testing frameworks that ensure products meet user expectations.',
      education: 'Education',
      educationTitle: 'BTEC FPT British College – Software Engineering',
      educationPeriod: 'Mar 2023 – Aug 2025',
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
      title: 'Testing Projects',
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
          description: 'QA Testing for React portfolio website. Tested: responsive design across devices, multilingual support (English/Vietnamese), interactive animations, cross-browser compatibility, and UI/UX functionality.'
        },
        aiCV: {
          title: 'AI CV Analysis System',
          description: 'QA Testing for resume analysis platform using Azure AI Services. Tested: CV parsing accuracy, AI feedback validation, UI responsiveness, error handling, API integration, and edge cases with various CV formats.'
        },
        ecommerce: {
          title: 'Okean Mobile – E-commerce Platform',
          description: 'QA Testing for e-commerce platform. Tested: AI-powered recommendations accuracy, product search and filtering, cart functionality, payment integration security, user workflows, and performance under load.'
        },
        sims: {
          title: 'Student Information Management System',
          description: 'QA Testing for student data management system. Tested: data integrity, role-based access control (students/teachers/admins), course enrollment workflows, CRUD operations, user permissions, and system security.'
        },
        anime: {
          title: 'Okean AnimeMovie',
          description: 'QA Testing for ASP.NET Core MVC anime application. Tested: browsing functionality, video playback, comments system, favorite features, trend data accuracy, content management, UI clarity, and performance optimization.'
        },
        okeanchat: {
          title: 'OkeanChat – Real-time Chat & Video Call',
          description: 'QA Testing for real-time chat application (ASP.NET Core 8 & SignalR). Tested: message delivery and latency, public/private messaging, friend management, P2P/group calls via WebRTC, connection stability, and audio/video quality.'

        }
      }
    },
    
    // CV Section
    cv: {
      title: 'My Resume',
      subtitle: 'View my detailed resume'
    },
    
    // Certifications Section
    certifications: {
      title: 'Certifications',
      subtitle: 'Professional credentials and achievements',
      certificates: {
        googleAI: {
          title: 'Google AI Essentials',
          issuer: 'Google',
          issued: 'Jan 2026',
          credentialId: 'L28CCX2AYDJW',
          link: 'https://coursera.org/share/8af8e0dff5f2f813c1d3686be4fdb4f6'
        },
        istqb: {
          title: 'ISTQB® Certified Tester - Foundation Level - 2025',
          issuer: 'Udemy',
          issued: 'Jan 2026',
          credentialId: 'UC-5b679ca1-ffb4-4557-aa90-70510c743322',
          link: 'https://www.udemy.com/certificate/UC-5b679ca1-ff1b-4557-aa90-70510c743322/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com'
        }
      }
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
      certifications: 'Chứng chỉ',
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
      description2: 'Cử nhân Kỹ sư Phần mềm từ BTEC FPT British College với kinh nghiệm thực tế về QA và các phương pháp kiểm thử. Mình vừa nhận được Giải thưởng Thành tích Học tập cho Học kỳ Thu 2024 trong chuyên ngành Computing! Mình tin vào sự chú ý đến chi tiết, học tập liên tục, và xây dựng các khung kiểm thử mạnh mẽ để đảm bảo sản phẩm đáp ứng kỳ vọng của người dùng.',
      education: 'Học vấn',
      educationTitle: 'BTEC FPT British College – Kỹ sư Phần mềm',
      educationPeriod: 'Tháng 3/2023 – Tháng 8/2025',
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
      title: 'Dự án Kiểm thử',
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
          description: 'Kiểm thử QA cho website portfolio React. Kiểm thử: thiết kế responsive trên các thiết bị, hỗ trợ đa ngôn ngữ (Tiếng Anh/Tiếng Việt), hiệu ứng tương tác, tương thích giữa các trình duyệt.'
        },
        aiCV: {
          title: 'Hệ thống Phân tích CV bằng AI',
          description: 'Kiểm thử QA cho nền tảng phân tích CV sử dụng Azure AI Services. Kiểm thử: độ chính xác của phân tích CV, xác thực phản hồi AI, đặc tính giao diện, xử lý lỗi, tích hợp API.'
        },
        ecommerce: {
          title: 'Okean Mobile – Nền tảng Thương mại điện tử',
          description: 'Kiểm thử QA cho nền tảng thương mại điện tử. Kiểm thử: độ chính xác của gợi ý sản phẩm AI, tìm kiếm và lọc sản phẩm, chức năng giỏ hàng, bảo mật thanh toán, quy trình người dùng.'
        },
        sims: {
          title: 'Hệ thống Quản lý Thông tin Sinh viên',
          description: 'Kiểm thử QA cho hệ thống quản lý dữ liệu sinh viên. Kiểm thử: tính toàn vẹn dữ liệu, kiểm soát truy cập theo vai trò (sinh viên/giáo viên/admin), quy trình đăng ký khóa học.'
        },
        anime: {
          title: 'Okean AnimeMovie',
          description: 'Kiểm thử QA cho ứng dụng xem anime ASP.NET Core MVC. Kiểm thử: chức năng duyệt, phát video, hệ thống bình luận, yêu thích, dữ liệu xu hướng, quản lý nội dung.'
        },
        okeanchat: {
          title: 'OkeanChat – Chat & Video Call Thời gian Thực',
          description: 'Kiểm thử QA cho ứng dụng chat thời gian thực (ASP.NET Core 8 & SignalR). Kiểm thử: gửi/nhận tin nhắn, tin nhắn công khai/riêng tư, quản lý bạn bè, cuộc gọi P2P/nhóm, ổn định kết nối.'

        }
      }
    },
    
    // CV Section
    cv: {
      title: 'Hồ sơ của tôi',
      subtitle: 'Xem CV chi tiết của mình'
    },
    
    // Certifications Section
    certifications: {
      title: 'Chứng chỉ',
      subtitle: 'Các chứng chỉ và thành tích chuyên nghiệp',
      certificates: {
        googleAI: {
          title: 'Google AI Essentials',
          issuer: 'Google',
          issued: 'Tháng 1/2026',
          credentialId: 'L28CCX2AYDJW',
          link: 'https://coursera.org/share/8af8e0dff5f2f813c1d3686be4fdb4f6'
        },
        istqb: {
          title: 'ISTQB® Certified Tester - Foundation Level - 2025',
          issuer: 'Udemy',
          issued: 'Tháng 1/2026',
          credentialId: 'UC-5b679ca1-ffb4-4557-aa90-70510c743322',
          link: 'https://www.udemy.com/certificate/UC-5b679ca1-ff1b-4557-aa90-70510c743322/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com'
        }
      }
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
