import { CALL_API } from "../../../actions/api.actions";

export const FETCH_SCAN_REQUEST = 'modules/dashboard/scans/FETCH_SCAN_REQUEST';
export const FETCH_SCAN_FAILED = 'modules/dashboard/scans/FETCH_SCAN_FAILED';
export const FETCH_SCAN_SUCCESS = 'modules/dashboard/scans/FETCH_SCAN_SUCCESS';

export const CREATE_SCAN_REQUEST = 'modules/dashboard/scans/CREATE_SCAN_REQUEST';
export const CREATE_SCAN_FAILED = 'modules/dashboard/scans/CREATE_SCAN_FAILED';
export const CREATE_SCAN_SUCCESS = 'modules/dashboard/scans/CREATE_SCAN_SUCCESS';

export const fetchScans = () => ({
  type: CALL_API,
  types: [
    FETCH_SCAN_REQUEST,
    FETCH_SCAN_SUCCESS,
    FETCH_SCAN_FAILED,
  ],
  method: 'get',
  endPoint: 'reports',
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
