Syntax 

<type>[optional scope]: <description>

[optional body]

[optional footer]


Valid Types
| Type       | Ý nghĩa (VN)                            | Meaning (EN)                        |
| ---------- | --------------------------------------- | ----------------------------------- |
| `feat`     | Thêm tính năng mới                      | Add a new feature                   |
| `fix`      | Sửa lỗi                                 | Fix a bug                           |
| `docs`     | Chỉnh sửa tài liệu (README...)          | Documentation changes               |
| `style`    | Thay đổi không ảnh hưởng logic (format) | Code formatting, no logic changes   |
| `refactor` | Tái cấu trúc code                       | Refactor without adding features    |
| `test`     | Thêm/sửa test                           | Add or update tests                 |
| `chore`    | Việc linh tinh (config, dependency...)  | Other tasks (configs, dependencies) |

Example
feat(profile): add avatar upload feature

- Support PNG and JPG formats
- Save file to S3 storage

Closes #12


