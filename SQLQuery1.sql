CREATE TABLE [dbo].[Employee](
	[EmployeeId] [int] IDENTITY(1,1) ,
	[EmployeeName] [nvarchar](500) ,
	[Department] [nvarchar](500) ,
	[DateOfJoining] [datetime] ,
	[PhotoFileName] [nvarchar](500) 
)
iNSERT into [dbo].[Employee] ([EmployeeName], [Department], [DateOfJoining], [PhotoFileName]) VALUES ('Bob', 'IT', '2021-06-17', 'anonymous.png')

/*INSERT into [dbo].[Department] ([DepartmentName]) VALUES ('IT')
INSERT into [dbo].[Department] ([DepartmentName]) VALUES ('Support')*/

select * from [dbo].[Employee]