import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeTableModule } from 'primeng/treetable';
import { Button } from 'primeng/button';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../../service/nodeservice';
import { CheckboxChangeEvent, CheckboxModule } from 'primeng/checkbox';
import { UserService } from '../../service/user.service';
import { TableModule, TableRowSelectEvent } from 'primeng/table';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-role-management',
  standalone: true,
  imports: [CommonModule, TreeTableModule, Button, CheckboxModule, TableModule],
  providers: [NodeService],
  templateUrl: './role-management.component.html',
  styleUrl: './role-management.component.css',
})
export class RoleManagementComponent implements OnInit {
  files!: TreeNode[];

  cols!: Column[];
  roles: any[] = [];
  selectedNodes3: TreeNode[] = [];
  selectionKeys = {};
  selected: any;
  role: any;
  files5: TreeNode[] = [];

  constructor(
    private nodeService: NodeService,
    private userService: UserService
  ) {}

  ngOnInit() {
    // this.nodeService.getTreeTableNodes().then((files) => {
    //   this.files = files;
    // });
    this.nodeService.getFilesystem().then((files) => {
      console.log(files);
      this.files5 = files;
    });
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' },
      { field: '', header: 'Create' },
      { field: '', header: 'Read' },
      { field: '', header: 'Write' },
    ];
    this.selectionKeys = {
      '0-0': {
        partialChecked: false,
        checked: true,
      },
    };
    this.getListRole();
  }

  checkChange(event: CheckboxChangeEvent, rowData: any) {
    console.log(event, rowData);
  }

  private getListRole() {
    this.userService.getListRole().subscribe((res) => {
      console.log(res);
      this.roles = res;
    });
  }

  rowSelected(event: TableRowSelectEvent) {
    console.log(event);
  }

  selectedRow(event: TableRowSelectEvent) {
    console.log('select');
    console.log(event);
  }
}
