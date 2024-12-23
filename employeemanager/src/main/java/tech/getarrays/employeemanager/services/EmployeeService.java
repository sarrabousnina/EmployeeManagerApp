package tech.getarrays.employeemanager.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tech.getarrays.employeemanager.exception.UserNotFoundException;
import tech.getarrays.employeemanager.model.Employee;
import tech.getarrays.employeemanager.repository.IEmployeeRepository;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;
import java.util.UUID;

@Service

public class EmployeeService {
    private final IEmployeeRepository iEmployeeRepository;
    @Autowired
    public EmployeeService(IEmployeeRepository employeeRepository)
    {
        this.iEmployeeRepository=employeeRepository;
    }

    public Employee addEmployee (Employee employee)
    {
        employee.setEmployeeCode(UUID.randomUUID().toString());
        return iEmployeeRepository.save(employee);
    }
    public List<Employee> findAllEmployees()
    {
        return iEmployeeRepository.findAll();
    }

    public Employee updateEmployee(Employee employee) {
        // Check if the employee exists in the database
        Employee existingEmployee = iEmployeeRepository.findById(employee.getId())
                .orElseThrow(() -> new UserNotFoundException("Employee with ID " + employee.getId() + " was not found!"));

        // Update the existing employee's details
        existingEmployee.setName(employee.getName());
        existingEmployee.setEmail(employee.getEmail());
        existingEmployee.setJobTitle(employee.getJobTitle());
        existingEmployee.setPhone(employee.getPhone());
        existingEmployee.setImageUrl(employee.getImageUrl());

        // Save the updated employee
        return iEmployeeRepository.save(existingEmployee);
    }


    @Transactional
    public void deleteEmployee(Long id)
    {
       iEmployeeRepository.deleteEmployeeById(id);
    }

    public Employee findEmployeeById(Long id)
    {
        return iEmployeeRepository.findEmployeeById(id).orElseThrow(() -> new UserNotFoundException("User by Id "+ id+" was not found !"));
    }

}
