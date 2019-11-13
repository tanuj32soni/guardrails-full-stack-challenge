import { CALL_API } from "../../../actions/api.actions";

export const FETCH_SCANS_REQUEST = 'modules/dashboard/scans/FETCH_SCANS_REQUEST';
export const FETCH_SCANS_FAILED = 'modules/dashboard/scans/FETCH_SCANS_FAILED';
export const FETCH_SCANS_SUCCESS = 'modules/dashboard/scans/FETCH_SCANS_SUCCESS';

export const CREATE_SCAN_REQUEST = 'modules/dashboard/scans/CREATE_SCAN_REQUEST';
export const CREATE_SCAN_FAILED = 'modules/dashboard/scans/CREATE_SCAN_FAILED';
export const CREATE_SCAN_SUCCESS = 'modules/dashboard/scans/CREATE_SCAN_SUCCESS';

export const fetchScans = (page, rowsPerPage) => ({
  type: CALL_API,
  types: [
    FETCH_SCANS_REQUEST,
    FETCH_SCANS_SUCCESS,
    FETCH_SCANS_FAILED,
  ],
  method: 'get',
  endPoint: `reports?page=${page}&count=${rowsPerPage}`,
});

export const createScan = scanData => ({
  type: CALL_API,
  types: [
    CREATE_SCAN_REQUEST,
    CREATE_SCAN_SUCCESS,
    CREATE_SCAN_FAILED,
  ],
  method: 'post',
  endPoint: 'reports',
  body: scanData,
});
